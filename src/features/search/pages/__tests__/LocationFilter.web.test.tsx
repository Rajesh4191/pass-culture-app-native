import React from 'react'

import { initialSearchState } from 'features/search/pages/reducer'
import {
  GeolocPositionError,
  GeolocPermissionState,
  GeolocationError,
  GeoCoordinates,
  GEOLOCATION_USER_ERROR_MESSAGE,
} from 'libs/geolocation'
import { fireEvent, render } from 'tests/utils/web'

import { LocationFilter } from '../LocationFilter'

const mockSearchState = initialSearchState
const mockDispatch = jest.fn()
jest.mock('features/search/pages/SearchWrapper', () => ({
  useStagedSearch: () => ({
    searchState: mockSearchState,
    dispatch: mockDispatch,
  }),
}))

const DEFAULT_POSITION = { latitude: 2, longitude: 40 } as GeoCoordinates
let mockPosition: GeoCoordinates | null = DEFAULT_POSITION
let mockPermissionState = GeolocPermissionState.GRANTED
let mockPositionError: GeolocationError | null = null
const mockTriggerPositionUpdate = jest.fn()
const mockShowGeolocPermissionModal = jest.fn()

jest.mock('libs/geolocation/GeolocationWrapper', () => ({
  useGeolocation: () => ({
    permissionState: mockPermissionState,
    position: mockPosition,
    positionError: mockPositionError,
    triggerPositionUpdate: mockTriggerPositionUpdate,
    showGeolocPermissionModal: mockShowGeolocPermissionModal,
  }),
}))

describe('LocationFilter component', () => {
  beforeEach(jest.clearAllMocks)
  afterEach(() => {
    mockPermissionState = GeolocPermissionState.GRANTED
    mockPosition = DEFAULT_POSITION
    mockPositionError = null
  })

  it('should render correctly', () => {
    const renderAPI = render(<LocationFilter />)
    expect(renderAPI).toMatchSnapshot()
  })

  it('should display error message when (position=null, type=AROUND_ME)', async () => {
    mockPosition = null
    mockPositionError = {
      type: GeolocPositionError.SETTINGS_NOT_SATISFIED,
      message: GEOLOCATION_USER_ERROR_MESSAGE[GeolocPositionError.SETTINGS_NOT_SATISFIED],
    }
    const { getByText, getByTestId } = render(<LocationFilter />)
    fireEvent.click(getByTestId('locationChoice-aroundMe'))
    getByText(mockPositionError.message)
    expect(mockDispatch).not.toBeCalled()
  })

  it('should dispatch actions on click (position=YES, type=AROUND_ME)', () => {
    const { getByTestId, queryByText } = render(<LocationFilter />)
    fireEvent.click(getByTestId('locationChoice-aroundMe'))
    expect(
      queryByText(`La géolocalisation est temporairement inutilisable sur ton téléphone`)
    ).toBeFalsy()
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'LOCATION_AROUND_ME',
      payload: DEFAULT_POSITION,
    })
  })

  it('should not dispatch actions on click (position=NO, type=AROUND_ME)', () => {
    mockPosition = null
    const { getByTestId } = render(<LocationFilter />)
    fireEvent.click(getByTestId('locationChoice-aroundMe'))
    expect(mockDispatch).not.toHaveBeenCalled()
  })

  it('should dispatch actions on click (position=YES, type=EVERYWHERE)', () => {
    const { getByTestId } = render(<LocationFilter />)
    fireEvent.click(getByTestId('locationChoice-everywhere'))
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'LOCATION_EVERYWHERE' })
  })

  it('should dispatch actions on click (position=NO, type=EVERYWHERE)', () => {
    const { getByTestId } = render(<LocationFilter />)
    fireEvent.click(getByTestId('locationChoice-everywhere'))
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'LOCATION_EVERYWHERE' })
  })

  it('should show the building icon when a venue is chosen', () => {
    mockSearchState.locationFilter.venueId = 4
    const { queryByTestId } = render(<LocationFilter />)
    expect(queryByTestId('BicolorLocationBuilding')).toBeTruthy()
    expect(queryByTestId('BicolorLocationPointer')).toBeFalsy()
  })

  it('should show the pointer icon when no venue is chosen', () => {
    mockSearchState.locationFilter.venueId = null
    const { queryByTestId } = render(<LocationFilter />)
    expect(queryByTestId('BicolorLocationBuilding')).toBeFalsy()
    expect(queryByTestId('BicolorLocationPointer')).toBeTruthy()
  })
})
