import { parseBooleanVariables } from 'libs/environment/parseBooleanVariables'

import { Environment } from './types'

export const env = parseBooleanVariables({
  ...process.env,
  API_BASE_URL: __DEV__ ? 'http://localhost:5001' : (process.env.API_BASE_URL as string),
}) as unknown as Environment
