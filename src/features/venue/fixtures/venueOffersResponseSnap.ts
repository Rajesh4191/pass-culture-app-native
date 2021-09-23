import { CategoryNameEnum, SubcategoryIdEnum } from 'api/gen'
import { SearchHit } from 'libs/search'

export const VenueOffersWithOneOfferResponseSnap: SearchHit = {
  _geoloc: { lat: 47.8898, lng: -2.83593 },
  objectID: '223337',
  offer: {
    category: CategoryNameEnum.CINEMA,
    subcategoryId: SubcategoryIdEnum.CINEPLEINAIR,
    dates: [1629312300, 1629485100, 1629657900],
    isDigital: false,
    isDuo: true,
    name: 'Titane - VF',
    prices: [0, 0, 0],
    thumbUrl:
      'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/products/FARMG',
  },
}

export const VenueOffersResponseSnap: SearchHit[] = [
  {
    _geoloc: { lat: 47.8898, lng: -2.83593 },
    objectID: '223342',
    offer: {
      category: CategoryNameEnum.CINEMA,
      subcategoryId: SubcategoryIdEnum.CINEPLEINAIR,
      dates: [1629312300, 1629485100, 1629657900],
      isDigital: false,
      isDuo: true,
      name: 'Titane - VF',
      prices: [0, 0, 0],
      thumbUrl:
        'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/products/FARMG',
    },
  },
  {
    _geoloc: { lat: 47.8898, lng: -2.83593 },
    objectID: '223338',
    offer: {
      category: CategoryNameEnum.CINEMA,
      subcategoryId: SubcategoryIdEnum.CINEPLEINAIR,
      dates: [1629312300, 1629485100, 1629657900],
      isDigital: false,
      isDuo: true,
      name: 'Bac Nord - VF',
      prices: [0, 0, 0],
      thumbUrl:
        'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/products/FARMG',
    },
  },
  {
    _geoloc: { lat: 47.8898, lng: -2.83593 },
    objectID: '223339',
    offer: {
      category: CategoryNameEnum.CINEMA,
      subcategoryId: SubcategoryIdEnum.CINEPLEINAIR,
      dates: [1629312300, 1629485100, 1629657900],
      isDigital: false,
      isDuo: true,
      name: 'Black Widow - VF',
      prices: [0, 0, 0],
      thumbUrl:
        'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/products/FARMA',
    },
  },
]
