import { rest } from 'msw'

import { BookingsResponse } from 'api/gen'
import { bookingsSnap } from 'features/bookings/api/bookingsSnap'
import { env } from 'libs/environment'
import { useNetInfo as useNetInfoDefault } from 'libs/network/useNetInfo'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { server } from 'tests/server'
import { renderHook, waitFor } from 'tests/utils'

import { useOngoingOrEndedBooking, useEndedBookingFromOfferId } from '../queries'

jest.mock('libs/react-query/usePersistQuery', () => ({
  usePersistQuery: jest.requireActual('react-query').useQuery,
}))

server.use(
  rest.get<BookingsResponse>(`${env.API_BASE_URL}/native/v1/bookings`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(bookingsSnap))
  )
)

jest.mock('libs/network/useNetInfo', () => jest.requireMock('@react-native-community/netinfo'))
const mockUseNetInfo = useNetInfoDefault as jest.Mock

jest.mock('features/auth/AuthContext', () => ({
  useAuthContext: jest.fn(() => ({ isLoggedIn: true })),
}))

describe('[API] booking queries', () => {
  mockUseNetInfo.mockReturnValue({ isConnected: true, isInternetReachable: true })

  describe('[Method] useEndedBookingFromOfferId', () => {
    it('should return an ended booking if existing', async () => {
      const booking = bookingsSnap.ended_bookings[0]
      const { result } = renderHook(() => useEndedBookingFromOfferId(booking.stock.offer.id), {
        // eslint-disable-next-line local-rules/no-react-query-provider-hoc
        wrapper: ({ children }) => reactQueryProviderHOC(children),
      })

      await waitFor(() => {
        expect(result.current?.data?.id).toEqual(booking.id)
        expect(result.current?.data?.stock.id).toEqual(booking.stock.id)
      })
    })
    it('should not return an ended booking if not existing', async () => {
      const unknownOfferId = 91919191
      const { result } = renderHook(() => useEndedBookingFromOfferId(unknownOfferId), {
        // eslint-disable-next-line local-rules/no-react-query-provider-hoc
        wrapper: ({ children }) => reactQueryProviderHOC(children),
      })

      await waitFor(() => {
        expect(result.current?.data).toEqual(null)
      })
    })
  })
  describe('[Method] useOngoingOrEndedBooking', () => {
    it('should return ongoing_bookings when there is one', async () => {
      const booking = bookingsSnap.ongoing_bookings[0]
      const { result } = renderHook(() => useOngoingOrEndedBooking(booking.id), {
        // eslint-disable-next-line local-rules/no-react-query-provider-hoc
        wrapper: ({ children }) => reactQueryProviderHOC(children),
      })

      await waitFor(() => {
        expect(result.current?.data?.id).toEqual(booking.id)
        expect(result.current?.data?.stock.id).toEqual(booking.stock.id)
      })
    })

    it('should return ended_bookings when there is one', async () => {
      const booking = bookingsSnap.ended_bookings[0]
      const { result } = renderHook(() => useOngoingOrEndedBooking(booking.id), {
        // eslint-disable-next-line local-rules/no-react-query-provider-hoc
        wrapper: ({ children }) => reactQueryProviderHOC(children),
      })

      await waitFor(() => {
        expect(result.current?.data?.id).toEqual(booking.id)
        expect(result.current?.data?.stock.id).toEqual(booking.stock.id)
      })
    })

    it('should return null if no ongoing nor ended booking can be found', async () => {
      const bookingId = 1230912039
      const { result } = renderHook(() => useOngoingOrEndedBooking(bookingId), {
        // eslint-disable-next-line local-rules/no-react-query-provider-hoc
        wrapper: ({ children }) => reactQueryProviderHOC(children),
      })

      await waitFor(() => {
        expect(result.current.data).toBeNull()
      })
    })
  })
})
