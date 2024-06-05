import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Maps from './routes/Maps.jsx';
import User from './routes/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Maps />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)