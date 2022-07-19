import { useRoute } from '@react-navigation/native'
import algoliasearch from 'algoliasearch'
import React, { useEffect } from 'react'
import { Configure, InstantSearch } from 'react-instantsearch-hooks'
import styled from 'styled-components/native'
import { v4 as uuidv4 } from 'uuid'

import { useAppSettings } from 'features/auth/settings'
import { UseRouteType } from 'features/navigation/RootNavigator'
import { CategoriesButtons } from 'features/search/components/CategoriesButtons'
import { SearchDetails } from 'features/search/components/SearchDetails'
import { SearchHeader } from 'features/search/components/SearchHeader'
import { useSearch } from 'features/search/pages/SearchWrapper'
import { useShowResultsForCategory } from 'features/search/pages/useShowResultsForCategory'
import { SearchView } from 'features/search/types'
import { env } from 'libs/environment'
import { OfflinePage } from 'libs/network/OfflinePage'
import { useNetInfo } from 'libs/network/useNetInfo'
import { Spacer } from 'ui/theme'
import { Form } from 'ui/web/form/Form'

const searchInputID = uuidv4()
const searchClient = algoliasearch(env.ALGOLIA_APPLICATION_ID, env.ALGOLIA_SEARCH_API_KEY)

export function Search() {
  const netInfo = useNetInfo()
  const { params } = useRoute<UseRouteType<'Search'>>()
  const { dispatch } = useSearch()
  const offersIndex = env.ALGOLIA_OFFERS_INDEX_NAME
  const { data: appSettings } = useAppSettings()
  const appEnableAutocomplete = appSettings?.appEnableAutocomplete ?? false
  const showResultsForCategory = useShowResultsForCategory()

  useEffect(() => {
    dispatch({
      type: 'SET_STATE_FROM_NAVIGATE',
      payload: params || { view: SearchView.Landing },
    })
  }, [dispatch, params])

  const bodySearch = () => {
    // SearchDetails will integrate recent searches and suggestions
    // To avoid blink effect when refreshing the view (due to dispatch delay), we also test params.showResults
    if (params && params?.view !== SearchView.Landing) {
      return <SearchDetails appEnableAutocomplete={appEnableAutocomplete} />
    }

    return (
      <Container>
        <CategoriesButtons onPressCategory={showResultsForCategory} />
        <Spacer.TabBar />
      </Container>
    )
  }

  if (!netInfo.isConnected) {
    return <OfflinePage />
  }

  return (
    <Form.Flex>
      {appEnableAutocomplete ? (
        <InstantSearch searchClient={searchClient} indexName={offersIndex}>
          <Configure restrictSearchableAttributes={['offer.name']} hitsPerPage={5} />
          <SearchHeader
            searchInputID={searchInputID}
            appEnableAutocomplete={appEnableAutocomplete}
          />
          {bodySearch()}
        </InstantSearch>
      ) : (
        <React.Fragment>
          <SearchHeader
            searchInputID={searchInputID}
            appEnableAutocomplete={appEnableAutocomplete}
          />
          {bodySearch()}
        </React.Fragment>
      )}
    </Form.Flex>
  )
}

const Container = styled.View({ flex: 1 })
