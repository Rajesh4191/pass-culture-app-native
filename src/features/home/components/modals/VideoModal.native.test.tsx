import React from 'react'

import { VideoModal } from 'features/home/components/modals/VideoModal'
import { videoModuleFixture } from 'features/home/fixtures/videoModule.fixture'
import { mockedAlgoliaResponse } from 'libs/algolia/__mocks__/mockedAlgoliaResponse'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { render, screen } from 'tests/utils'
import { waitForModalOpeningAnimation } from 'tests/waitForModalOpeningAnimation'

const hideModalMock = jest.fn()

const mockOffer = mockedAlgoliaResponse.hits[0]

describe('VideoModal', () => {
  it('should render correctly if modal visible', async () => {
    render(
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      reactQueryProviderHOC(
        <VideoModal visible hideModal={hideModalMock} offer={mockOffer} {...videoModuleFixture} />
      )
    )

    await waitForModalOpeningAnimation()

    expect(screen).toMatchSnapshot()
  })
})
