import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import Root from './routes/Root.jsx';
import Home from './routes/Home.jsx';
import Maps from './routes/Maps.jsx';
import User from './routes/User.jsx';
import ErrorPage from './error-page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/maps",
        element: <Maps />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)