import React, { useState, useEffect,useRef, useContext } from 'react';
import * as routes from '../../../routes/routes'
import './style.css';
import { NavLink } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { AppContext } from '../../../store/Store';

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const {setSidebarShown,sidebarShown} = useContext(AppContext)
  // const [navbarWhite,setNavbarWhite] = useState(false)

  useEffect(() => {

    const handleScrollBehaviour = () => {

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and scrolled past a threshold
        setNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setNavbarVisible(true);
      }

      // if(currentScrollY > 100){
      //   setNavbarWhite(true)
      // }
      // else{
      //   setNavbarWhite(false)
      // }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScrollBehaviour);

    return () => {
      window.removeEventListener('scroll', handleScrollBehaviour);
    };
  }, [lastScrollY]);

  return (
    <div className={`landing-page-limit border-b-2 fixed z-[20] top-0 transition-all duration-700 ease-in-out bg-white ${!navbarVisible && "navbar-hidden"}`}>
      <div className={`landing-navbar`}>
        <button className="landing-navbar-menu" onClick={()=>{
          // console.log("button did click",sidebarShown)
          setSidebarShown(true)
        }}>
          <CiMenuFries size={"20px"} />
        </button>
        <h3 className="landing-navbar-logo">Kunle Laniyan</h3>
        <div className="landing-navbar-links">
          <NavLink to={routes.HOME}>Home</NavLink>
          <NavLink to={routes.SESSION}>Book a session</NavLink>
          <NavLink to={routes.CONTACT}>Contact</NavLink>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar
