import React from 'react'
import './style.css';
import Hero1 from '../../../assets/One.jpg'
import Hero2 from '../../../assets/four.jpg'
import Hero3 from '../../../assets/three.jpeg'
import HeroCard from './HeroCard';

const CARDS = [
    {
        img: Hero1,
        description: "Marriage Portraits"
    },
    {
        img: Hero2,
        description: "Personal Portraits"
    },
    {
        img: Hero3,
        description: "Family Portraits"
    },
]
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="landing-page-limit flex flex-col items-center">
        <h4 className="hero-text z-[50]">Capturing Memories Is Everything</h4>
        <div className="hero-contents">
            {
                CARDS?.map((card,index)=>(
                    <HeroCard img={card?.img} description={card?.description} key={index} index={index} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default HeroSection
