import React from 'react'

import { NonEligibleModal } from 'features/onboarding/pages/NonEligibleModal'
import { NonEligible } from 'features/onboarding/types'
import { render } from 'tests/utils/web'

describe('NonEligibleModal', () => {
  it.each(Object.values(NonEligible))('should render null in web', (modalType) => {
    const { container } = renderNonEligibleModal(modalType)
    expect(container).toBeEmptyDOMElement()
  })
})

const renderNonEligibleModal = (modalType: NonEligible) => {
  return render(<NonEligibleModal visible hideModal={jest.fn()} modalType={modalType} />)
}
