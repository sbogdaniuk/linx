import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "react-query";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";

const RQ_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: true
    }
  }
};
const queryClient = new QueryClient(RQ_CONFIG)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
