import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import MainLayout from './Layout/MainLayout.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import HomeLayout from './Layout/HomeLayout.jsx';
import AllMarathon from './Pages/AllMarathon';
import Dashboard from './Pages/Dashboard';
import EveDetail from './Pages/EveDetail.jsx';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './Layout/PrivateRoute.jsx'; 
import EvenReg from './Pages/EvenReg.jsx';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomeLayout></HomeLayout>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allMarathon',
        element: <PrivateRoute><AllMarathon></AllMarathon></PrivateRoute>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      {
        path: '/marathons/all/:id', 
        element:<PrivateRoute><EveDetail /></PrivateRoute> 
      },
      {
        path: '/eventReg', 
        element:<PrivateRoute><EvenReg /></PrivateRoute> 
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
