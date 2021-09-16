import React, { useCallback } from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import { ModuleTitle } from 'features/home/atoms'
import { VenueTile } from 'features/home/atoms/VenueTile'
import { VenueHit } from 'libs/search'
import { Spacer } from 'ui/theme'

type VenuesModuleProps = {
  hits: VenueHit[]
}

const keyExtractor = (item: VenueHit) => item.id

export const VenuesModule = (props: VenuesModuleProps) => {
  const { hits } = props

  const renderItem: ListRenderItem<VenueHit> = useCallback(({ item }) => {
    // TODO(antoinewg) create component VenueTile with image (copy from OfferTile)
    return <VenueTile name={item.name} />
  }, [])

  return (
    <React.Fragment>
      <ModuleTitle title="display.title" />
      <Spacer.Column numberOfSpaces={4} />
      <FlatList
        testID="VenuesModuleList"
        data={hits}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        horizontal={true}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListHeaderComponent={HorizontalMargin}
        ListFooterComponent={HorizontalMargin}
      />
    </React.Fragment>
  )
}

const HorizontalMargin = () => <Spacer.Row numberOfSpaces={6} />
const ItemSeparatorComponent = () => <Spacer.Row numberOfSpaces={4} />
