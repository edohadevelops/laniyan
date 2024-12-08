import React, { useContext, useEffect } from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import './style.css';
import { SessionModal } from '..';
import { AppContext } from '../../store/Store';
import Sidebar from './sidebar/Sidebar';


const Layout = () => {
  const {sidebarShown} = useContext(AppContext)
  return (
    <div className='page-layout'>
        <Navbar />
        <Outlet />
        <Footer />
        {
          sidebarShown &&
          <Sidebar />
        }
    </div>
  )
}

export default Layout
