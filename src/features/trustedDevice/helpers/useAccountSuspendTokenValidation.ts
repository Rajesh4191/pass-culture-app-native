import { useQuery } from 'react-query'

import { api } from 'api/api'
import { ApiError } from 'api/apiHelpers'
import { QueryKeys } from 'libs/queryKeys'

export const useAccountSuspendTokenValidation = (token: string) => {
  return useQuery([QueryKeys.ACCOUNT_SUSPEND_TOKEN_VALIDATION, token], async () => {
    try {
      return await api.getnativev1accountsuspendtokenValidationtoken(token)
    } catch (error) {
      if (error instanceof ApiError) return error
      return
    }
  })
}
