import React from 'react'

import { UserProfileResponse } from 'api/gen'
import { AuthWrapper } from 'features/auth/context/AuthContext'
import { Profile } from 'features/profile/pages/Profile'
import { beneficiaryUser } from 'fixtures/user'
import { storage } from 'libs/storage'
import { mockServer } from 'tests/mswServer'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { measurePerformance, screen } from 'tests/utils'

// We mock server instead of hooks to test the real behavior of the component.
mockServer.get<UserProfileResponse>('/native/v1/me', beneficiaryUser)

describe('<Profile />', () => {
  it('Performance test for Profile page', async () => {
    storage.saveString('access_token', 'token')
    await measurePerformance(
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      reactQueryProviderHOC(
        <AuthWrapper>
          <Profile />
        </AuthWrapper>
      ),
      {
        // Add scenario if necessary
        scenario: async () => {
          await screen.findByText('Paramètres du compte')
        },
      }
    )
  })
})
