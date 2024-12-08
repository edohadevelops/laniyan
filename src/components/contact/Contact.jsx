import React from 'react'

const Contact = () => {
  return (
    <div className='contact-form-section'>
      <form action="" className="contact-form">
        <input placeholder='NAME' type="text" className='contact-form-input' />
        <input placeholder='EMAIL' type="text" className='contact-form-input' />
        <input placeholder='WEDDING DATE & ADDRESS' type="text" className='contact-form-input'/>
        <input placeholder='YOUR PHONE NUMBER' type="text" className='contact-form-input'/>
        <textarea className='contact-form-textarea' placeholder='TELL US MORE' name="" id=""></textarea>
        <div className='contact-form-button'>
          <button>Send</button>
        </div>

      </form>
    </div>
  )
}

export default Contact
