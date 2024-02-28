import React from "react";
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query/core'
import { RouterProviderProps } from 'react-router/dist/lib/components'

export interface AppProps {
  queryClient: QueryClient;
  router: RouterProviderProps['router']
}

export function App({ queryClient, router }: AppProps) {
  return (
    <div className="flex">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}
