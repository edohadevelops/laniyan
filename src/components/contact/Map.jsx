import React from 'react'

const Map = () => {
  return (
    <div className='contact-map-section'>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.940988556407!2d7.439036175019371!3d9.0691408909938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b456bfb47bf%3A0xcc7967717828b53f!2sKunle%20laniyan%20photography!5e0!3m2!1sen!2sng!4v1733485111689!5m2!1sen!2sng" 
        className='contact-map'
        loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  )
}

export default Map
