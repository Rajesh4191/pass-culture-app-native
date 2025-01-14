import React from 'react'

import { Price } from 'features/search/components/sections/Price/Price'
import { initialSearchState } from 'features/search/context/reducer'
import { fireEvent, render, screen } from 'tests/utils'

let mockSearchState = initialSearchState

jest.mock('features/search/context/SearchWrapper', () => ({
  useSearch: () => ({
    searchState: mockSearchState,
    dispatch: jest.fn(),
  }),
}))

jest.mock('features/profile/api/useUpdateProfileMutation')

describe('Price component', () => {
  it('should display the search price description when minimum price selected', async () => {
    mockSearchState = { ...initialSearchState, minPrice: '5' }
    render(<Price />)

    expect(await screen.findByText('5\u00a0€ et plus')).toBeTruthy()
  })

  it('should display the search price description when maximum price selected', async () => {
    mockSearchState = { ...initialSearchState, maxPrice: '10' }
    render(<Price />)

    expect(await screen.findByText('10\u00a0€ et moins')).toBeTruthy()
  })

  it('should display the search price description when minimum and maximum prices selected', async () => {
    mockSearchState = { ...initialSearchState, minPrice: '5', maxPrice: '10' }
    render(<Price />)

    expect(await screen.findByText('de 5\u00a0€ à 10\u00a0€')).toBeTruthy()
  })

  it('should display the search price description with "Gratuit" when minimum and maximum prices selected and are 0', async () => {
    mockSearchState = { ...initialSearchState, minPrice: '0', maxPrice: '0' }
    render(<Price />)

    expect(await screen.findByText('Gratuit')).toBeTruthy()
  })

  it('should open the categories filter modal when clicking on the category button', async () => {
    render(<Price />, {
      theme: { isDesktopViewport: false, isMobileViewport: true },
    })
    const searchPriceButton = screen.getByTestId('FilterRow')

    fireEvent.press(searchPriceButton)

    const fullscreenModalScrollView = await screen.findByTestId('fullscreenModalScrollView')

    expect(fullscreenModalScrollView).toBeTruthy()
  })
})
