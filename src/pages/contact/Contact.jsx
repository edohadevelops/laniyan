import React from 'react'
import { ContactMap, ContactSection, ContactSkeleton } from '../../components'
import './style.css'

const Contact = () => {
  return (
    <div className='contact-page'>
        <ContactSkeleton 
            header={'Looking for photographers who share your vision?'}
            subheading={'Send us a message!'}
        >
            <ContactSection />
        </ContactSkeleton>
        <ContactSkeleton
            header={'Curious about where all the magic happens?'}
            subheading={'Come visit us today!'}
        >
            <ContactMap />
        </ContactSkeleton>
    </div>
  )
}

export default Contact
