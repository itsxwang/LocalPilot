import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Service from "./Components/Services/Service.tsx";
import Products from "./Components/Products/Products";
import Experiences from "./Components/Experiences/Experiences";
import Homes from "./Components/Homes/Homes";


import { GoogleOAuthProvider } from '@react-oauth/google';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Experiences />,
  },
  {
    path: "/homes",
    element: <Homes />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/experiences",
    element: <Experiences />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider
    clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID as string}
    >
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
