import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css'

import StringReverser from './Pages/StringReverser';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';
import GamePage from './Pages/GamePage';
import Layout from './components/Layout/Layout';
import LoginPage from './Pages/LoginPage/LoginPage';
import GamePageNoLogin from './Pages/GamePageNoLogin';
import UserProvider from './user/UserProvider';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/game",
    element: <GamePageNoLogin />,
  },
  {
    path: "/account",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <ProtectedRoute component={HomePage} />
      },
      {
        path: "reverse",
        element: <StringReverser />
      },
      {
        path: "user",
        element: <UserPage />
      },
      {
        path: "game",
        element: <GamePage />
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
