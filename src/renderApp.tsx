import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { QueryClient } from "react-query";
import { App } from "./App";
import { RQ_CONFIG } from "./constants/react-query";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

type RenderAppProps = {
  route?: string;
  queryClient?: QueryClient;
};

export const renderApp = ({
  route = "/",
  queryClient = new QueryClient(RQ_CONFIG),
}: RenderAppProps = {}) => {
  window.history.pushState({}, "Test page", route);

  const router = createBrowserRouter(routes)

  return {
    user: userEvent.setup(),
    ...render(<App router={router} queryClient={queryClient} />),
  };
};

// re-export everything
export * from '@testing-library/react';
