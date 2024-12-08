import React, { useContext, useEffect, useState } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../store/Store';
import { IoCloseSharp } from "react-icons/io5";

const Modal = () => {

  const {setModalOpen: setModal,selectedSession: session} = useContext(AppContext)
  const onBackdropDisable = (e) => {
    if(e.target === e.currentTarget){
    setModal(false)

    }
  }

  return (
    <div className='view-session-small-modal' onClick={onBackdropDisable}>
      <div className='view-session-small-body'>
        <div className={`view-session-small-left`}>
          <div className="view-session-small-content">
            <div className="view-session-small-img">
                <div className="view-session-small-controls">
                  <button onClick={()=>setModal(false)}>
                    <IoCloseSharp size={"20px"} />
                  </button>
                </div>  
              <img src={session?.img} alt="" />
            </div>

          </div>

        </div>
        <div className={`view-session-small-right`}>
            <div className={`view-session-small-content`}>
              <div className="view-session-small-details">
                        
                <p className="view-session-small-title">{session.title}</p>
                <p className="view-session-small-description">
                  {
                    session?.description
                  }
                </p>
                <div className="view-session-small-features">
                  <p className="view-session-small-features-title">Package Includes: </p>
                  <ul className="view-session-small-features-list">
                    {
                      session?.features?.length && session?.features?.map((feature,index)=>(
                        <li className="view-session-small-feature" key={index}>
                          {feature}
                        </li>

                      ))
                    }
                  </ul>
                </div>
                <div className="view-session-small-action">
                  <NavLink 
                    to={`/book-session/${session?.title}`} 
                    className="view-session-small-book-btn"
                    onClick={()=>setModal(false)}
                  >
                   Book <br /> Now
                  </NavLink>
                </div>
              </div>

            </div>

        </div>
      </div>
      
    </div>
  )
}

export default Modal
