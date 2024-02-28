import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient } from "react-query";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { routes } from "./routes";
import { RQ_CONFIG } from "./constants/react-query";
import { App } from "./App";
import { createBrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient(RQ_CONFIG);

export const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      queryClient={queryClient}
      router={router}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
