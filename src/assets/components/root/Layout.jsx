import React from 'react'
import Header from '../hederpart/Header'
import { Outlet } from 'react-router-dom'
import Footerpart from '../footerpart/Footerpart'
import Service from '../service/Service'
import Seventhpart from '../seventhpart/Seventhpart'

const Layout = () => {
  return (
    <>
    <Header/>
   
    <Outlet/>
    <Seventhpart/>
    <Service/>
    
    <Footerpart/>
    </>
  )
}

export default Layout
