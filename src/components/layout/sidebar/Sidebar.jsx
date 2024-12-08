import React, { useContext, useEffect, useState } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../store/Store';
import { IoCloseSharp } from "react-icons/io5";
import Logo from '../../../assets/kunle.png';
import * as routes from '../../../routes/routes'

const Sidebar = () => {

  const {setSidebarShown} = useContext(AppContext)
  const onBackdropDisable = (e) => {
    if(e.target === e.currentTarget){
    setSidebarShown(false)

    }
  }
  const [showSidebar,setShowSidebar] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setShowSidebar(true)
    },100) 
  },[])

  return (
    <div className='sidebar-container' onClick={onBackdropDisable}>
        <div className={`sidebar ${ !showSidebar ? "-translate-x-full": "translate-x-0" }`}>
            <button className='sidebar-close-btn' onClick={()=>setSidebarShown(false)}>
                <IoCloseSharp size={"25px"} />
            </button>
            <div className="sidebar-content">
                <div className="sidebar-logo">
                    <img src={Logo} alt='kunle-laniyan-logo' />
                </div>
                <div className="sidebar-links">
                    <NavLink to={routes?.HOME} className={'sidebar-link'}>Home</NavLink>
                    <NavLink to={routes?.SESSION} className={'sidebar-link'}>Book a Session</NavLink>
                    <NavLink to={routes?.CONTACT} className={'sidebar-link'}>Contact us</NavLink>
                </div>
            </div>
            <div className="sidebar-terms">
                <a href='#'>Terms & Conditions</a>
                <a href='#'>Privacy policy</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
