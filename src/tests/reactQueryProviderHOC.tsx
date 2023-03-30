import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

export const queryCache = new QueryCache()

export const reactQueryProviderHOC = (
  component: React.ReactNode,
  setup?: (queryClient: QueryClient) => void
) => {
  const queryClient = new QueryClient({
    queryCache,
    logger: {
      log: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    },
  })
  if (setup) setup(queryClient)
  return <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
}
