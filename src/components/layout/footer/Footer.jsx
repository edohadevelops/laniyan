import React from 'react'
import './style.css'
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import Logo from '../../../assets/kunle.png'

const Footer = () => {
  // #f5f0eb
  // top border component #e1e1e1
  return (
    <div className="footer-component">
      <div className="landing-page-limit bg-white">
        <div className="footer-top">
          <div className="footer-top-item footer-top-socials lg:border-r-2">
            <p className='footer-social-leading'>We're Social</p>
            <div className="footer-top-socials">
              <button><span className='text-gray-700'><BiLogoInstagramAlt size={"25px"} /></span></button>
              <button><span className='text-gray-700'><BiLogoFacebookCircle size={"25px"} /></span></button>
              <button><span className='text-gray-700'><FaYoutube size={"25px"} /></span></button>
            </div>
            <p className='footer-social-trailing'>hello@kunlelaniyan.com</p>
          </div>
          <div className="footer-top-item flex flex-col items-center justify-center lg:border-r-2">
            <div className='footer-logo'>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="footer-top-item footer-subscribe">
            <p className='footer-subscribe-leading'>Stay Connected</p>
            <input className="footer-subscribe-input" type="text" placeholder='EMAIL ADDRESS' />
            <button className='footer-subscribe-btn'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="landing-page-limit">
        <div className="footer-bottom">
          <div className="footer-bottom-item">
            <p className="footer-copyright">2022 Copyright - Kunle Laniyan Photography</p>
          </div>
          <div className="footer-bottom-item gap-2 lg:gap-4">
            <p className="footer-terms">Terms & Conditions</p>
            <p className="footer-terms">Privacy Policy</p>
          </div>
          <div className="flex gap-4 items-center justify-center">
              <button>
                <span className='text-gray-700'><BiLogoInstagramAlt size={"25px"} /></span>
              </button>
              <button>
                <span className='text-gray-700'><BiLogoFacebookCircle size={"25px"} /></span>
              </button>
              <button>
                <span className='text-gray-700'><FaYoutube size={"25px"} /></span>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
