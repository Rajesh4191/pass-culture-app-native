import {
  BusinessModule,
  ExclusivityModule,
  RecommendedOffersModule,
  VenuesModule,
  OffersModule,
  HomepageModule,
  HomepageModuleType,
} from 'features/home/types'
import {
  BusinessContentModel,
  ExclusivityContentModel,
  RecommendationContentModel,
  VenuesContentModel,
  AlgoliaContentModel,
  AlgoliaParameters,
  isAlgoliaContentModel,
  HomepageNatifModule,
  isBusinessContentModel,
  isRecommendationContentModel,
  isVenuesContentModel,
  isExclusivityContentModel,
} from 'libs/contentful/types'

const buildImageUrl = (url: string): string => {
  return `https:${url}`
}

const formatOfferIdToNumber = (offerId: string): number | undefined => {
  return Number.isNaN(Number(offerId)) ? undefined : Number(offerId)
}

const hasAtLeastOneField = (object: any) => {
  return Object.keys(object).length > 0
}

export const adaptHomepageNatifModules = (modules: HomepageNatifModule[]): HomepageModule[] => {
  const adaptedHomepageNatifModules = modules.map((module) => {
    const { fields } = module
    if (!fields || !hasAtLeastOneField(fields)) return null

    if (isAlgoliaContentModel(module)) {
      return adaptOffersModule(module)
    }
    if (isBusinessContentModel(module)) {
      return adaptBusinessModule(module)
    }
    if (isRecommendationContentModel(module)) {
      return adaptRecommendationModule(module)
    }
    if (isVenuesContentModel(module)) {
      return adaptVenuesModule(module)
    }
    if (isExclusivityContentModel(module)) {
      return adaptExclusivityModule(module)
    }
    return null
  })

  const adaptedHomepageNatifModulesWithoutNull = adaptedHomepageNatifModules.filter(
    (module) => module != null
  ) as HomepageModule[]

  return adaptedHomepageNatifModulesWithoutNull
}

export const adaptBusinessModule = (module: BusinessContentModel): BusinessModule => {
  const leftIcon = module.fields.leftIcon?.fields.file.url
    ? buildImageUrl(module.fields.leftIcon?.fields.file.url)
    : undefined
  const image = buildImageUrl(module.fields.image?.fields.file.url)
  return {
    type: HomepageModuleType.BusinessModule,
    id: module.sys.id,
    analyticsTitle: module.fields.title,
    image: image,
    title: module.fields.firstLine,
    subtitle: module.fields.secondLine,
    leftIcon: leftIcon,
    url: module.fields.url,
    shouldTargetNotConnectedUsers: module.fields.targetNotConnectedUsersOnly,
  }
}

export const adaptVenuesModule = (modules: VenuesContentModel): VenuesModule | null => {
  const venuesParameters = modules.fields.venuesSearchParameters
    .filter((params) => params.fields && hasAtLeastOneField(params.fields))
    .map(({ fields }) => fields)

  if (venuesParameters.length === 0) return null
  return {
    type: HomepageModuleType.VenuesModule,
    id: modules.sys.id,
    venuesParameters: venuesParameters,
    displayParameters: modules.fields.displayParameters.fields,
  }
}

export const adaptRecommendationModule = (
  modules: RecommendationContentModel
): RecommendedOffersModule => ({
  type: HomepageModuleType.RecommendedOffersModule,
  id: modules.sys.id,
  displayParameters: modules.fields.displayParameters.fields,
  recommendationParameters: modules.fields.recommendationParameters?.fields,
})

export const adaptExclusivityModule = (modules: ExclusivityContentModel): ExclusivityModule => {
  return {
    type: HomepageModuleType.ExclusivityModule,
    id: modules.sys.id,
    title: modules.fields.title,
    alt: modules.fields.alt,
    image: buildImageUrl(modules.fields.image?.fields.file.url),
    url: modules.fields.url,
    displayParameters: modules.fields.displayParameters?.fields,
    offerId: formatOfferIdToNumber(modules.fields.offerId),
  }
}

const buildOffersParams = (
  firstParams: AlgoliaParameters,
  additionalParams: AlgoliaParameters[]
): OffersModule['offersModuleParameters'] =>
  [firstParams, ...additionalParams]
    .filter((params) => params.fields && hasAtLeastOneField(params.fields))
    .map(({ fields }) => fields)

export const adaptOffersModule = (modules: AlgoliaContentModel): OffersModule | null => {
  const additionalAlgoliaParameters = modules.fields.additionalAlgoliaParameters ?? []

  const offersList = buildOffersParams(
    modules.fields.algoliaParameters,
    additionalAlgoliaParameters
  )

  if (offersList.length === 0) return null

  const coverUrl = modules.fields.cover
    ? buildImageUrl(modules.fields.cover.fields.image?.fields.file.url)
    : undefined

  return {
    type: HomepageModuleType.OffersModule,
    id: modules.sys.id,
    title: modules.fields.title,
    displayParameters: modules.fields.displayParameters.fields,
    offersModuleParameters: offersList,
    cover: coverUrl,
  }
}
