/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../components/Layout/DashboardLayout';
import MainLayout from '../components/Layout/MainLayout';
import Companies from '../views/Companies/List';
import Products from '../views/Companies/Products';
import Login from '../views/Auth/Login';
import NotFound from '../views/404';
import Register from '../views/Auth/Register';
import Verification from '../views/Auth/Verification';

export const protectedRoutes = [
  {
    element: <DashboardLayout />,
    children: [
      { index: true, path: '/app/companies', element: <Companies /> },
      { path: '/app/companies/products/:id', element: <Products /> },
      { path: '*', element: <Navigate to="/app/companies" /> },
    ],
  },
];
export const publicRoutes = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Register /> },
      { path: '/login', element: <Login /> },
      { path: '/sign-up', element: <Register /> },
      { path: '/verification', element: <Verification /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/sign-up" /> },
    ],
  },
];
