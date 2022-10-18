import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import App from './App'
import Rates from '../src/pages/Rates'
import ErrorPage from './Error-page'
import Faq from '../src/pages/FAQ'
import './index.css'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "rates",
    element: <Rates />
  },
  {
    path: "FAQ",
    element: <Faq />
  },
  {
    path: "privacy",
    element: <Privacy />
  },
  {
    path: "terms",
    element: <Terms />
  },
  {
    path: 'contact',
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
