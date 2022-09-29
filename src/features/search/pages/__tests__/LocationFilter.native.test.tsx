import React from 'react'

import { navigate } from '__mocks__/@react-navigation/native'
import { LocationType } from 'features/search/enums'
import { initialSearchState } from 'features/search/pages/reducer'
import { MAX_RADIUS } from 'features/search/pages/reducer.helpers'
import { analytics } from 'libs/firebase/analytics'
import {
  GeolocPositionError,
  GeolocPermissionState,
  GeolocationError,
  GeoCoordinates,
  GEOLOCATION_USER_ERROR_MESSAGE,
} from 'libs/geolocation'
import { SuggestedPlace } from 'libs/place'
import { fireEvent, render } from 'tests/utils'

import { LocationFilter } from '../LocationFilter'

const mockSearchState = initialSearchState
const mockStagedDispatch = jest.fn()
jest.mock('features/search/pages/SearchWrapper', () => ({
  useSearch: () => ({
    searchState: mockSearchState,
    dispatch: jest.fn(),
  }),
  useStagedSearch: () => ({
    dispatch: mockStagedDispatch,
  }),
}))

const DEFAULT_POSITION = { latitude: 2, longitude: 40 } as GeoCoordinates
let mockPosition: GeoCoordinates | null = DEFAULT_POSITION
let mockPermissionState = GeolocPermissionState.GRANTED
let mockPositionError: GeolocationError | null = null
const mockTriggerPositionUpdate = jest.fn()
const mockShowGeolocPermissionModal = jest.fn()

const Kourou: SuggestedPlace = {
  label: 'Kourou',
  info: 'Guyane',
  geolocation: { longitude: -52.669736, latitude: 5.16186 },
}

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
  afterEach(() => {
    mockPermissionState = GeolocPermissionState.GRANTED
    mockPosition = DEFAULT_POSITION
    mockPositionError = null
  })

  it('should render correctly', () => {
    const { toJSON } = renderLocationFilter()
    expect(toJSON()).toMatchSnapshot()
  })

  it('should display error message when (position=null, type=AROUND_ME)', async () => {
    mockPosition = null
    mockPositionError = {
      type: GeolocPositionError.SETTINGS_NOT_SATISFIED,
      message: GEOLOCATION_USER_ERROR_MESSAGE[GeolocPositionError.SETTINGS_NOT_SATISFIED],
    }
    const { getByTestId, queryByText } = renderLocationFilter()
    fireEvent.press(getByTestId('locationChoice-aroundMe'))

    queryByText(mockPositionError.message)
  })

  it('should change location filter on search button press (position=YES, type=AROUND_ME)', () => {
    const { getByTestId, getByText, queryByText } = renderLocationFilter()

    fireEvent.press(getByTestId('locationChoice-aroundMe'))
    expect(
      queryByText(`La géolocalisation est temporairement inutilisable sur ton téléphone`)
    ).toBeFalsy()

    fireEvent.press(getByText('Rechercher'))

    expect(mockStagedDispatch).toHaveBeenCalledWith({ type: 'SET_LOCATION_AROUND_ME' })
    const expectedSearchParams = {
      ...mockSearchState,
      locationFilter: { locationType: LocationType.AROUND_ME, aroundRadius: MAX_RADIUS },
    }
    expect(navigate).toHaveBeenCalledWith('TabNavigator', {
      params: expectedSearchParams,
      screen: 'Search',
    })
  })

  it('should log ChangeSearchLocation event when selecting Around Me and pressing on the search button', () => {
    const { getByTestId, getByText } = renderLocationFilter()
    fireEvent.press(getByTestId('locationChoice-aroundMe'))
    fireEvent.press(getByText('Rechercher'))

    expect(analytics.logChangeSearchLocation).toHaveBeenCalledWith({ type: 'aroundMe' })
  })

  it('should not change location filter on search button press (position=NO, type=AROUND_ME)', () => {
    mockPosition = null
    const { getByTestId } = renderLocationFilter()
    fireEvent.press(getByTestId('locationChoice-aroundMe'))
    expect(mockStagedDispatch).not.toHaveBeenCalled()
    expect(navigate).not.toHaveBeenCalled()
  })

  it('should change location filter on search button press (position=YES, type=EVERYWHERE)', () => {
    const { getByTestId, getByText } = renderLocationFilter()
    fireEvent.press(getByTestId('locationChoice-everywhere'))
    fireEvent.press(getByText('Rechercher'))

    expect(mockStagedDispatch).toHaveBeenCalledWith({ type: 'SET_LOCATION_EVERYWHERE' })
    const expectedSearchParams = {
      ...mockSearchState,
      locationFilter: { locationType: LocationType.EVERYWHERE },
    }
    expect(navigate).toHaveBeenCalledWith('TabNavigator', {
      params: expectedSearchParams,
      screen: 'Search',
    })
  })

  it('should log ChangeSearchLocation event when selecting Everywhere and pressing on the search button', () => {
    const { getByTestId, getByText } = renderLocationFilter()
    fireEvent.press(getByTestId('locationChoice-everywhere'))
    fireEvent.press(getByText('Rechercher'))

    expect(analytics.logChangeSearchLocation).toHaveBeenCalledWith({ type: 'everywhere' })
  })

  it('should change location filter on search button press (position=NO, type=EVERYWHERE)', () => {
    const { getByTestId, getByText } = renderLocationFilter()
    fireEvent.press(getByTestId('locationChoice-everywhere'))
    fireEvent.press(getByText('Rechercher'))

    expect(mockStagedDispatch).toHaveBeenCalledWith({ type: 'SET_LOCATION_EVERYWHERE' })
    const expectedSearchParams = {
      ...mockSearchState,
      locationFilter: { locationType: LocationType.EVERYWHERE },
    }
    expect(navigate).toHaveBeenCalledWith('TabNavigator', {
      params: expectedSearchParams,
      screen: 'Search',
    })
  })

  it('should show the building icon when a venue is chosen', () => {
    mockSearchState.locationFilter = {
      locationType: LocationType.VENUE,
      venue: { ...Kourou, venueId: 4 },
    }
    const { queryByTestId } = renderLocationFilter()

    expect(queryByTestId('BicolorLocationBuilding')).toBeTruthy()
    expect(queryByTestId('BicolorLocationPointer')).toBeNull()
  })

  it('should change location filter on search button press (type=VENUE)', () => {
    mockSearchState.locationFilter = {
      locationType: LocationType.VENUE,
      venue: { ...Kourou, venueId: 4 },
    }
    const { getByText } = renderLocationFilter()
    fireEvent.press(getByText('Rechercher'))

    expect(mockStagedDispatch).toHaveBeenCalledWith({
      type: 'SET_LOCATION_VENUE',
      payload: { ...Kourou, venueId: 4 },
    })
    expect(navigate).toHaveBeenCalledWith('TabNavigator', {
      params: mockSearchState,
      screen: 'Search',
    })
  })

  it('should log ChangeSearchLocation event when selecting a Venue and pressing on the search button', () => {
    mockSearchState.locationFilter = {
      locationType: LocationType.VENUE,
      venue: { ...Kourou, venueId: 4 },
    }
    const { getByText } = renderLocationFilter()
    fireEvent.press(getByText('Rechercher'))

    expect(analytics.logChangeSearchLocation).toHaveBeenCalledWith({ type: 'venue', venueId: 4 })
  })

  it('should show the pointer icon if a location is chosen', () => {
    mockSearchState.locationFilter = {
      locationType: LocationType.PLACE,
      aroundRadius: 10,
      place: Kourou,
    }
    const { queryByTestId } = renderLocationFilter()
    expect(queryByTestId('BicolorLocationBuilding')).toBeNull()
    expect(queryByTestId('BicolorLocationPointer')).toBeTruthy()
  })

  it('should change location filter on search button press (type=PLACE)', () => {
    mockSearchState.locationFilter = {
      locationType: LocationType.PLACE,
      aroundRadius: 10,
      place: Kourou,
    }
    const { getByText } = renderLocationFilter()
    fireEvent.press(getByText('Rechercher'))

    expect(mockStagedDispatch).toHaveBeenCalledWith({
      type: 'SET_LOCATION_PLACE',
      payload: { aroundRadius: 10, place: Kourou },
    })
    expect(navigate).toHaveBeenCalledWith('TabNavigator', {
      params: mockSearchState,
      screen: 'Search',
    })
  })

  it('should log ChangeSearchLocation event when selecting a Place and pressing on the search button', () => {
    mockSearchState.locationFilter = {
      locationType: LocationType.PLACE,
      aroundRadius: 10,
      place: Kourou,
    }
    const { getByText } = renderLocationFilter()
    fireEvent.press(getByText('Rechercher'))

    expect(analytics.logChangeSearchLocation).toHaveBeenCalledWith({ type: 'place' })
  })

  it('should select Around Me filter when pressing the reset button with geoloc activated', () => {
    mockSearchState.locationFilter = {
      locationType: LocationType.PLACE,
      aroundRadius: 10,
      place: Kourou,
    }
    const { getByText } = renderLocationFilter()
    fireEvent.press(getByText('Réinitialiser'))

    expect(getByText('Autour de moi')).toHaveStyle({ color: '#eb0055' })
  })

  it('should select Everywhere filter when pressing the reset button with geoloc deactivated', () => {
    mockPosition = null
    mockSearchState.locationFilter = {
      locationType: LocationType.PLACE,
      aroundRadius: 10,
      place: Kourou,
    }
    const { getByText } = renderLocationFilter()
    fireEvent.press(getByText('Réinitialiser'))

    expect(getByText('Partout')).toHaveStyle({ color: '#eb0055' })
  })
})

function renderLocationFilter() {
  return render(<LocationFilter />)
}
