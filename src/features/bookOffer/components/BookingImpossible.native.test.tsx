import * as React from 'react'

import { api } from 'api/api'
import { FavoriteResponse, PaginatedFavoritesResponse } from 'api/gen'
import { initialBookingState, Step } from 'features/bookOffer/context/reducer'
import { favoriteResponseSnap } from 'features/favorites/fixtures/favoriteResponseSnap'
import { analytics } from 'libs/analytics'
import { mockServer } from 'tests/mswServer'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { act, fireEvent, render, screen, waitFor } from 'tests/utils'

import { BookingImpossible } from './BookingImpossible'

jest.mock('features/auth/context/AuthContext', () => ({
  useAuthContext: jest.fn(() => ({ isLoggedIn: true })),
}))

const mockOfferId = favoriteResponseSnap.offer.id

const mockInitialBookingState = initialBookingState
const mockDismissModal = jest.fn()
const mockDispatch = jest.fn()
jest.mock('features/bookOffer/context/useBookingContext', () => ({
  useBookingContext: jest.fn(() => ({
    bookingState: { ...mockInitialBookingState, offerId: mockOfferId },
    dismissModal: mockDismissModal,
    dispatch: mockDispatch,
  })),
}))

const mockPostnativev1sendOfferWebappLinkByEmailofferId = jest.spyOn(
  api,
  'postnativev1sendOfferWebappLinkByEmailofferId'
)

const mockPostnativev1sendOfferLinkByPushofferId = jest.spyOn(
  api,
  'postnativev1sendOfferLinkByPushofferId'
)

describe('<BookingImpossible />', () => {
  describe('When offer is already favorite', () => {
    beforeEach(() => {
      const favoritesResponseWithOfferIn: PaginatedFavoritesResponse = {
        page: 1,
        nbFavorites: 1,
        favorites: [favoriteResponseSnap],
      }
      mockServer.get<PaginatedFavoritesResponse>(
        '/native/v1/me/favorites',
        favoritesResponseWithOfferIn
      )
    })
    it('should render without CTAs', async () => {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      render(reactQueryProviderHOC(<BookingImpossible />))

      await screen.findByLabelText('Voir le détail de l’offre')

      expect(screen).toMatchSnapshot()
    })

    it("should log 'BookingImpossibleiOS' on mount", async () => {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      render(reactQueryProviderHOC(<BookingImpossible />))

      await screen.findByLabelText('Voir le détail de l’offre')

      expect(analytics.logBookingImpossibleiOS).toHaveBeenCalledTimes(1)
    })

    it("should dismiss modal when clicking on 'Retourner à l'offre'", async () => {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      render(reactQueryProviderHOC(<BookingImpossible />))

      fireEvent.press(screen.getByText('Retourner à l’offre'))

      await waitFor(() => {
        expect(mockDismissModal).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('When offer is not yet favorite', () => {
    beforeEach(() => {
      const favoriteResponse: FavoriteResponse = favoriteResponseSnap
      mockServer.post('/native/v1/me/favorites', favoriteResponse)
      mockServer.post(`/native/v1/send_offer_link_by_push/${mockOfferId}`, {})
      mockServer.post(`/native/v1/send_offer_webapp_link_by_email/${mockOfferId}`, {
        favoriteResponse,
      })
    })

    it('should render with CTAs', async () => {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      render(reactQueryProviderHOC(<BookingImpossible />))

      await screen.findByLabelText('Mettre en favoris')

      expect(screen).toMatchSnapshot()
    })

    it('should send email/push notification when adding to favorites', async () => {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      render(reactQueryProviderHOC(<BookingImpossible />))

      await act(async () => {
        const addToFavoriteButton = await screen.findByLabelText('Mettre en favoris')

        fireEvent.press(addToFavoriteButton)
      })

      expect(mockPostnativev1sendOfferWebappLinkByEmailofferId).toHaveBeenCalledWith(mockOfferId)
      expect(mockPostnativev1sendOfferLinkByPushofferId).toHaveBeenCalledWith(mockOfferId)
    })

    it('should log analytics event when adding to favorites', async () => {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      render(reactQueryProviderHOC(<BookingImpossible />))

      fireEvent.press(screen.getByText('Mettre en favoris'))

      await waitFor(() => {
        expect(analytics.logHasAddedOfferToFavorites).toHaveBeenCalledTimes(1)
        expect(analytics.logHasAddedOfferToFavorites).toHaveBeenCalledWith({
          from: 'bookingimpossible',
          offerId: mockOfferId,
        })
        expect(mockDismissModal).toHaveBeenCalledTimes(1)
      })
    })

    it('should change booking step from date to confirmation', async () => {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      render(reactQueryProviderHOC(<BookingImpossible />))

      await screen.findByLabelText('Mettre en favoris')

      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: 'CHANGE_STEP',
        payload: Step.CONFIRMATION,
      })
    })
  })
})
