import { useRoute } from '@react-navigation/native'
import React from 'react'

import { navigateToHome } from 'features/navigation/helpers'
import { UseRouteType } from 'features/navigation/RootNavigator/types'
import { useAccountSuspendTokenValidation } from 'features/trustedDevice/helpers/useAccountSuspendTokenValidation'
import { AccountSecurity } from 'features/trustedDevice/pages/AccountSecurity'
import { SuspensionChoiceExpiredLink } from 'features/trustedDevice/pages/SuspensionChoiceExpiredLink'
import { LoadingPage } from 'ui/components/LoadingPage'
import { SNACK_BAR_TIME_OUT, useSnackBarContext } from 'ui/components/snackBar/SnackBarContext'

enum AccountSecurityStatusCode {
  INVALID_TOKEN = 400,
  EXPIRED_TOKEN = 401,
}

export const AccountSecurityBuffer = () => {
  const { params } = useRoute<UseRouteType<'AccountSecurity'>>()

  const { data: accountSuspendToken, isLoading } = useAccountSuspendTokenValidation(params.token)
  const tokenStatus = accountSuspendToken?.statusCode

  const { showErrorSnackBar } = useSnackBarContext()
  const navigateToHomeWithErrorSnackBar = () => {
    navigateToHome()
    showErrorSnackBar({
      message: 'Une erreur est survenue pour cause de lien invalide.',
      timeout: SNACK_BAR_TIME_OUT,
    })
  }

  if (isLoading) {
    return <LoadingPage />
  } else if (tokenStatus === AccountSecurityStatusCode.EXPIRED_TOKEN) {
    return <SuspensionChoiceExpiredLink />
  } else if (tokenStatus === AccountSecurityStatusCode.INVALID_TOKEN) {
    return navigateToHomeWithErrorSnackBar()
  } else {
    return <AccountSecurity />
  }
}
