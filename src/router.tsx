import { Layout } from './routes/layout'
import { Dashboard } from './routes/dashboard'
import { Users } from './routes/users'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { ErrorPage } from './components/error-page'

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
