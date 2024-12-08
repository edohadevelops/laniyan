import React from 'react'
import './style.css'
import Design from '../../assets/leafDesign.png'

const Skeleton = ({children,header,subheading}) => {
  return (
    <div className='contact-skeleton'>
      <div className="landing-page-limit">
        <header className="contact-header">
          <h4 className="contact-heading">{header}</h4>
          <p className="contact-subheading">{subheading}</p>
        </header>
        {
          children
        }
        <img className='skeleton-design' src={Design} alt='section-design'/>
      </div>
    </div>
  )
}

export default Skeleton
