import { useAuthContext } from 'features/auth/context/AuthContext'
import { offerReportReasonResponseSnap } from 'features/offer/fixtures/offerReportReasonResponse'
import { useNetInfoContext as useNetInfoContextDefault } from 'libs/network/NetInfoWrapper'
import { mockServer } from 'tests/mswServer'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { renderHook, waitFor } from 'tests/utils'

import { useReasonsForReporting } from './useReasonsForReporting'

jest.mock('features/auth/context/AuthContext')
const mockUseAuthContext = useAuthContext as jest.MockedFunction<typeof useAuthContext>

const mockUseNetInfoContext = useNetInfoContextDefault as jest.Mock

describe('useReasonsForReporting hook', () => {
  beforeEach(() => {
    mockServer.get('/native/v1/offer/report/reasons', offerReportReasonResponseSnap)
  })
  afterEach(jest.resetAllMocks)

  it('should retrieve reasons for reporting data when logged in', async () => {
    mockUseNetInfoContext.mockImplementationOnce(() => ({ isConnected: true }))
    mockUseAuthContext.mockImplementationOnce(() => ({
      isLoggedIn: true,
      setIsLoggedIn: jest.fn(),
      refetchUser: jest.fn(),
      isUserLoading: false,
    }))
    const { result } = renderHook(useReasonsForReporting, {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      wrapper: ({ children }) => reactQueryProviderHOC(children),
    })

    expect(result.current.isFetching).toEqual(true)

    await waitFor(() => {
      expect(result.current.data?.reasons.length).toEqual(
        offerReportReasonResponseSnap.reasons.length
      )
    })
  })

  it('should return null when not logged in', async () => {
    mockUseNetInfoContext.mockImplementationOnce(() => ({ isConnected: true }))
    mockUseAuthContext.mockImplementationOnce(() => ({
      isLoggedIn: false,
      setIsLoggedIn: jest.fn(),
      refetchUser: jest.fn(),
      isUserLoading: false,
    }))

    const { result } = renderHook(useReasonsForReporting, {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      wrapper: ({ children }) => reactQueryProviderHOC(children),
    })

    expect(result.current.isFetching).toEqual(false)
  })
})
