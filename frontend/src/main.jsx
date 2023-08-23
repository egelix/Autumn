import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

import StringReverser from './Pages/StringReverser';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/reverse",
        element: <StringReverser />
      },
      {
        path: "/user",
        element: <UserPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
