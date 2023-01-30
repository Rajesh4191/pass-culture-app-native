import isEmpty from 'lodash/isEmpty'

import { HomepageModuleType, OffersModule } from 'features/home/types'
import { buildImageUrl } from 'libs/contentful/adapters/helpers/buildImageUrl'
import {
  AlgoliaContentModel,
  AlgoliaParameters,
  SearchParametersFields,
} from 'libs/contentful/types'

const mapOffersSubcategories = (
  algoliaSubcategories: SearchParametersFields['algoliaSubcategories']
) => algoliaSubcategories?.fields?.subcategories

const buildOffersParams = (
  firstParams: AlgoliaParameters,
  additionalParams: AlgoliaParameters[]
): OffersModule['offersModuleParameters'] =>
  [firstParams, ...additionalParams]
    .filter((params) => params.fields && !isEmpty(params.fields))
    .map(({ fields: { algoliaSubcategories, ...otherFields } }) => ({
      subcategories: mapOffersSubcategories(algoliaSubcategories),
      ...otherFields,
    }))

export const adaptOffersModule = (module: AlgoliaContentModel): OffersModule | null => {
  const additionalAlgoliaParameters = module.fields.additionalAlgoliaParameters ?? []

  const offersList = buildOffersParams(module.fields.algoliaParameters, additionalAlgoliaParameters)

  if (offersList.length === 0) return null

  const coverUrl = module.fields.cover
    ? buildImageUrl(module.fields.cover.fields.image?.fields.file.url)
    : undefined

  return {
    type: HomepageModuleType.OffersModule,
    id: module.sys.id,
    title: module.fields.title,
    displayParameters: module.fields.displayParameters.fields,
    offersModuleParameters: offersList,
    cover: coverUrl,
  }
}