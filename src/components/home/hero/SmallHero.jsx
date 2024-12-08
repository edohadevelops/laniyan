import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay,EffectFade,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { NavLink } from 'react-router-dom';
import PhotoOne from '../../../assets/smallHero1.jpg'
import PhotoTwo from '../../../assets/smallHeroIndoor.jpg'
import PhotoThree from '../../../assets/smallHeroOutdoor.jpg'
import PhotoFour from '../../../assets/smallHeroFour.jpg'
import * as routes from '../../../routes/routes'
const SmallHero = () => {
    const slides = [
        {
          leading: "Family Photoshoot",
          trailing: "Celebrate your family bond with timeless memories captured in our cozy and professional studio.",
          cta: "Book Session",
          ctaLink: routes.SESSION,
          img: PhotoOne, // Example image path
        },
        {
          leading: "Personal Photoshoot",
          trailing: "Showcase your personality and style in a tailored photoshoot session just for you.",
          cta: "Book Session",
          ctaLink: routes.SESSION,
          img: PhotoTwo, // Example image path
        },
        {
          leading: "Wedding Photoshoot",
          trailing: "Relive your special day forever with enchanting photos that capture every magical moment.",
          cta: "Book Session",
          ctaLink: routes.SESSION,
          img: PhotoThree, // Example image path
        },
        {
          leading: "Outdoor Photoshoot",
          trailing: "Capture the beauty of nature and your moments together in breathtaking outdoor locations.",
          cta: "Book Session",
          ctaLink: routes.SESSION,
          img: PhotoFour, // Example image path
        },
    ];
      
  return (
    <Swiper
        modules={[ Pagination, Autoplay,EffectFade]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        effect='fade'
    >
        {
            slides?.map((slide,index)=>(
                <SwiperSlide key={index}>
                    <div 
                        className='small-hero-section' 
                        style={{
                            backgroundImage: `linear-gradient(20deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${slide?.img}')`,
                        }}
                    >
                        <h3 className='small-hero-leading'>{slide?.leading}</h3>
                        <p className='small-hero-trailing'>{slide?.trailing}</p>
                        <NavLink className={"small-hero-cta"} to={slide?.ctaLink}>
                            Book <br /> Session
                        </NavLink>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default SmallHero
