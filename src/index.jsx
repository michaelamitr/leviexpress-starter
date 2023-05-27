import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './style.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import { Home } from './components/Home';
import { Reservation } from './components/Reservation/reservation';

export const API_BASE_URL = 'https://apps.kodim.cz/daweb/leviexpress/api';

createRoot(document.querySelector('#app')).render(<App />);
