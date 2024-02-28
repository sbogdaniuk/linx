import { QueryClientConfig } from "react-query";

export const RQ_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: true,
    },
  },
};
