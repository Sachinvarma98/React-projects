import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import Layout from './components/Layout.jsx'
import Contact from './components/contact/Contact.jsx'
import Author from './components/author/Author.jsx'
import AuditPage from './components/auditpage/AuditPage.jsx'
import Github from './components/github/Github.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "author",
        element: <Author />
      },
      {
        path: "auditpage",
        element: < AuditPage />
      },
      {
        path: "githb",
        element: <Github />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
