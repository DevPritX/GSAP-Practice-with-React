import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// Components

// Pages
import LandingPage from "./pages/landingPage"
import ContactPage from "./pages/contactPage"
import AboutPage from "./pages/aboutPage"

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <LandingPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}>
      <Root />
    </RouterProvider>
  </React.StrictMode>
);