import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import * as routes from '../../../routes/routes'


const HeroCard = ({img,description,index}) => {
    const [biggerCard,setBiggerCard] = useState(1);
    const [hoverMe,setHoverMe] = useState(null)
  return (
    <div 
        className={
          `hero-card w-full ${index !== biggerCard ? "-translate-y-[80px] max-w-[200px]" : index === 1 && "max-w-[400px]"}
           ${index === 2 && "justify-self-end"}
           ${index === 1 && "justify-self-center"}
           ${hoverMe === index && "scale-[1.1]"}
           ${index !== 1 && "max-lg:hidden"}
          `
        }
        onMouseEnter={()=>{
          setHoverMe(index)
        }}
        onMouseLeave={()=>{
          setHoverMe(null)
        }}
    >
      <div 
        className={`
          hero-card-img ${index === biggerCard ? "h-[250px]" : "h-[300px]"}
          
        `}
      >
        <img className={`hero-card-img-el`} src={img} alt={""} />
        {
          index === 1 &&
          <NavLink to={routes?.SESSION} className={"book-session-btn"}>
            <span>Book</span>
            Session
          </NavLink>
        }
      </div>
      <p className="hero-card-text">{description}</p>
      
    </div>
  )
}

export default HeroCard
