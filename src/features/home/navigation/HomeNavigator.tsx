import { RouteProp, NavigationProp } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

import { Login } from 'features/auth/pages/Login'
import { ReinitializePassword } from 'features/auth/pages/ReinitializePassword'
import { ResetPasswordEmailSent } from 'features/auth/pages/ResetPasswordEmailSent'
import { AppComponents } from 'features/cheatcodes/pages/AppComponents'
import { CheatCodes } from 'features/cheatcodes/pages/CheatCodes'
import { IdCheck } from 'features/cheatcodes/pages/IdCheck'
import { Navigation } from 'features/cheatcodes/pages/Navigation'
import { Home } from 'features/home/pages/Home'
import { Offer } from 'features/offer'

export type HomeStackParamList = {
  AppComponents: undefined
  Navigation: undefined
  CheatCodes: undefined
  Home: { shouldDisplayLoginModal: boolean }
  IdCheck: undefined
  Login?: { userId: string }
  ReinitializePassword: { token: string; expiration_date: number }
  ResetPasswordEmailSent: { email: string }
  Offer: { offerId: string }
}

export const HomeStack = createStackNavigator<HomeStackParamList>()

export const HomeNavigator: React.FC = function () {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        initialParams={{ shouldDisplayLoginModal: false }}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <HomeStack.Screen name="Offer" component={Offer} />
      <HomeStack.Screen
        name="ReinitializePassword"
        component={ReinitializePassword}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="IdCheck" component={IdCheck} options={{ headerShown: false }} />
      <HomeStack.Screen name="AppComponents" component={AppComponents} />
      <HomeStack.Screen name="Navigation" component={Navigation} />
      <HomeStack.Screen name="CheatCodes" component={CheatCodes} />
      <HomeStack.Screen
        name="ResetPasswordEmailSent"
        component={ResetPasswordEmailSent}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  )
}

/** Type helper to share screen names */
export type ScreenNames = keyof HomeStackParamList
/**
 * Type helper for useRoute
 *
 * const {
 *  params: { token, expiration_date },
 * } = useRoute<UseRouteType<'ReinitializePassword'>>()
 */
export type UseRouteType<ScreenName extends ScreenNames> = RouteProp<HomeStackParamList, ScreenName>
/**
 * Type helper for navigation prop
 *
 * type Props = {
 *   navigation: ScreenNavigationProp<'Home'>
 * }
 */
export type ScreenNavigationProp<ScreenName extends ScreenNames> = StackNavigationProp<
  HomeStackParamList,
  ScreenName
>
/**
 * Type helper for useNavigation
 *
 * const navigation = useNavigation<UseNavigationType>()
 */
export type UseNavigationType = NavigationProp<HomeStackParamList>
/**
 * Type helper to access route params
 *
 * export type MyStackParamList = {
 *   Login?: { userId: string }
 * }
 *
 * RouteParams<'Login', MyStackParamList>  // will return ({ userId: string } | undefined)
 */
export type RouteParams<
  StackParamList extends Record<string, unknown>,
  Screename extends keyof StackParamList
> = Pick<StackParamList, Screename>[Screename]
