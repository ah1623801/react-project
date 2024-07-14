import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Html from './pages/html';
import Javascript from './pages/javascript';
import Css from './pages/css';
const router = createBrowserRouter([
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
  {
    path: "/css",
    element: <Css />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


