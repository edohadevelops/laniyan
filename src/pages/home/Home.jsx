import React, { useEffect, useState } from 'react'
import './style.css'
import { HeroSection, HeroSectionTwo } from '../../components'

const Home = () => {
  const [windowWidth,setWindowWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize',handleResize);

    return () => window.removeEventListener('resize',handleResize)
  },[])
  return (
    <div className="home-page">
      {
        windowWidth < 1000 ?
        <HeroSectionTwo /> :
        <HeroSection />
      }
    </div>
  )
}

export default Home
