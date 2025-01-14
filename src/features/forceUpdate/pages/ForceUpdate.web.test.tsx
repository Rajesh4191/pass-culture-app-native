import React from 'react'

import { render, checkAccessibilityFor, screen } from 'tests/utils/web'

import { ForceUpdate } from './ForceUpdate'

describe('<ForceUpdate/>', () => {
  it('should not display the web app button', () => {
    render(<ForceUpdate resetErrorBoundary={() => null} />)

    const goToWebappButton = screen.queryByText('Utiliser la version web')
    expect(goToWebappButton).toBeNull()
  })

  describe('Accessibility', () => {
    it('should not have basic accessibility issues', async () => {
      const { container } = render(<ForceUpdate resetErrorBoundary={() => null} />)

      const results = await checkAccessibilityFor(container)

      expect(results).toHaveNoViolations()
    })
  })
})
