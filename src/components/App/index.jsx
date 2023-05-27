import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Reservation } from '../Reservation/reservation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/reservation/:id',
    element: <Reservation />,
  },
]);

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);
