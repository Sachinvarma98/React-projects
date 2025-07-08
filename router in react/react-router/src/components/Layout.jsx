import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Contact from './contact/Contact'
 

const Layout = () => {
  return (
    <>
    < Header />
    <Outlet />
    < Footer />
   
    </>
  )
}

export default Layout