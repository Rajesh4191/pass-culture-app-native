import { SearchResponse } from '@algolia/client-search'

import { SubcategoryIdEnum } from 'api/gen'
import { Offer } from 'shared/offer/types'

export const mockedAlgoliaResponse: SearchResponse<Offer> = {
  hits: [
    {
      offer: {
        dates: [],
        isDigital: false,
        isDuo: false,
        name: 'La nuit des temps',
        prices: [28.0],
        subcategoryId: SubcategoryIdEnum.LIVRE_PAPIER,
        thumbUrl:
          'https://storage.gra.cloud.ovh.net/v1/AUTH_688df1e25bd84a48a3804e7fa8938085/storage-pc-dev/thumbs/mediations/CDNQ',
      },
      _geoloc: { lat: 48.94374, lng: 2.48171 },
      objectID: '102280',
      venue: {
        id: 1,
        name: 'Lieu 1',
        publicName: 'Lieu 1',
        address: '1 rue de la paix',
        postalCode: '75000',
        city: 'Paris',
      },
    },
    {
      offer: {
        dates: [],
        isDigital: false,
        isDuo: false,
        name: 'I want something more',
        prices: [23.0],
        subcategoryId: SubcategoryIdEnum.CONCERT,
        thumbUrl:
          'https://storage.gra.cloud.ovh.net/v1/AUTH_688df1e25bd84a48a3804e7fa8938085/storage-pc-dev/thumbs/mediations/CDKQ',
      },
      _geoloc: { lat: 48.91265, lng: 2.4513 },
      objectID: '102272',
      venue: {
        id: 2,
        name: 'Lieu 2',
        publicName: 'Lieu 2',
        address: '2 rue de la paix',
        postalCode: '75000',
        city: 'Paris',
      },
    },
    {
      offer: {
        dates: [1605643200.0],
        isDigital: false,
        isDuo: true,
        name: 'Un lit sous une rivière',
        prices: [34.0],
        subcategoryId: SubcategoryIdEnum.CONCERT,
        thumbUrl:
          'https://storage.gra.cloud.ovh.net/v1/AUTH_688df1e25bd84a48a3804e7fa8938085/storage-pc-dev/thumbs/mediations/CDBA',
      },
      _geoloc: { lat: 4.90339, lng: -52.31663 },
      objectID: '102249',
      venue: {
        id: 3,
        name: 'Lieu 3',
        publicName: 'Lieu 3',
        address: '3 rue de la paix',
        postalCode: '75000',
        city: 'Paris',
      },
    },
    {
      offer: {
        dates: [],
        isDigital: false,
        isDuo: false,
        name: 'I want something more',
        prices: [28.0],
        subcategoryId: SubcategoryIdEnum.CONCERT,
        thumbUrl:
          'https://storage.gra.cloud.ovh.net/v1/AUTH_688df1e25bd84a48a3804e7fa8938085/storage-pc-dev/thumbs/mediations/CDZQ',
      },
      _geoloc: { lat: 4.90339, lng: -52.31663 },
      objectID: '102310',
      venue: {
        id: 4,
        name: 'Lieu 4',
        publicName: 'Lieu 4',
        address: '4 rue de la paix',
        postalCode: '75000',
        city: 'Paris',
      },
    },
  ],
  nbHits: 4,
  page: 0,
  nbPages: 1,
  hitsPerPage: 6,
  exhaustiveNbHits: true,
  query: '',
  params:
    'page=0&facetFilters=%5B%5B%22offer.category%3AMUSIQUE%22%2C%22offer.category%3AINSTRUMENT%22%5D%5D&numericFilters=%5B%5B%22offer.prices%3A+0+TO+300%22%5D%5D&hitsPerPage=6',
  processingTimeMS: 1,
}

export const moreHitsForSimilarOffersPlaylist = [
  {
    offer: {
      dates: [],
      isDigital: false,
      isDuo: false,
      name: 'La nuit de tous les temps',
      prices: [28.0],
      subcategoryId: SubcategoryIdEnum.LIVRE_PAPIER,
      thumbUrl:
        'https://storage.gra.cloud.ovh.net/v1/AUTH_688df1e25bd84a48a3804e7fa8938085/storage-pc-dev/thumbs/mediations/CDNQ',
    },
    _geoloc: { lat: 48.94374, lng: 2.48171 },
    objectID: '102281',
    venue: {},
  },
  {
    offer: {
      dates: [],
      isDigital: false,
      isDuo: false,
      name: 'I want something more and more',
      prices: [23.0],
      subcategoryId: SubcategoryIdEnum.CONCERT,
      thumbUrl:
        'https://storage.gra.cloud.ovh.net/v1/AUTH_688df1e25bd84a48a3804e7fa8938085/storage-pc-dev/thumbs/mediations/CDKQ',
    },
    _geoloc: { lat: 48.91265, lng: 2.4513 },
    objectID: '102273',
    venue: {},
  },
  {
    offer: {
      dates: [1605643200.0],
      isDigital: false,
      isDuo: true,
      name: 'Un lit sous une rivière pourpre',
      prices: [34.0],
      subcategoryId: SubcategoryIdEnum.CONCERT,
      thumbUrl:
        'https://storage.gra.cloud.ovh.net/v1/AUTH_688df1e25bd84a48a3804e7fa8938085/storage-pc-dev/thumbs/mediations/CDBA',
    },
    _geoloc: { lat: 4.90339, lng: -52.31663 },
    objectID: '102250',
    venue: {},
  },
  {
    offer: {
      dates: [],
      isDigital: false,
      isDuo: false,
      name: 'I want something more and more',
      prices: [28.0],
      subcategoryId: SubcategoryIdEnum.CONCERT,
      thumbUrl:
        'https://storage.gra.cloud.ovh.net/v1/AUTH_688df1e25bd84a48a3804e7fa8938085/storage-pc-dev/thumbs/mediations/CDZQ',
    },
    _geoloc: { lat: 4.90339, lng: -52.31663 },
    objectID: '102311',
    venue: {},
  },
]
