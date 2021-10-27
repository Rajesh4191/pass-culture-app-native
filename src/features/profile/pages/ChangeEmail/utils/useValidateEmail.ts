import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'

import { isEmailValid, useIsCurrentUserEmail } from 'ui/components/inputs/emailCheck'

export function useValidateEmail(email: string) {
  const [hasEmailError, setHasEmailError] = useState({ hasError: false, message: '' })
  const isCurrentUserEmail = useIsCurrentUserEmail(email)

  function checkValidateEmail() {
    if (email.length > 0) {
      if (!isEmailValid(email)) {
        setHasEmailError({ hasError: true, message: t`Format de l'e-mail incorrect` })
      } else if (isCurrentUserEmail) {
        setHasEmailError({
          hasError: true,
          message: t`L'e-mail saisi est identique à votre e-mail actuel`,
        })
      } else setHasEmailError({ hasError: false, message: '' })
    } else setHasEmailError({ hasError: false, message: '' })
  }

  useEffect(() => {
    checkValidateEmail()
  }, [email])

  return hasEmailError
}
