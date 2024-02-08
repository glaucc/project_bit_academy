import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Contact from './Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);
