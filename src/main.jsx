import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import LayoutDashboard from './components/LayoutDashboard'
import ErrorPage from './pages/ErrorPage'
import './index.css'

const router = createBrowserRouter([
  {
      path: "/",
      element: <LayoutDashboard />,
      errorElement: <ErrorPage />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
      ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
