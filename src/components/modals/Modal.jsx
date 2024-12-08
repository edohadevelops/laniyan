import React, { useContext, useEffect, useState } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../store/Store';
import { IoCloseSharp } from "react-icons/io5";

const Modal = () => {

  const {setModalOpen: setModal,selectedSession: session} = useContext(AppContext)
  const onBackdropDisable = (e) => {
    if(e.target === e.currentTarget){
    setModal(false)

    }
  }
  const [showContent,setShowContent] = useState(false);
  const [openCurtain,setOpenCurtain] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setShowContent(true)
    },100) 

    setTimeout(()=>{
      setOpenCurtain(true)
    },1500)
  },[])

  return (
    <div className='view-session-modal' onClick={onBackdropDisable}>
      <div className='view-session-body'>
        <div className={`view-session-left ${ !showContent ? "translate-y-full": "translate-y-0" }`}>
          <div className="view-session-content">
            <div className="view-session-img">
              <img src={session?.img} alt="" />
            </div>
            <div className={`view-session-left-curtain ${openCurtain ? "-translate-y-0": "-translate-y-full"}`}>

            </div>

          </div>

        </div>
        <div className={`view-session-right ${ !showContent ? "translate-y-full": "translate-y-0" }`}>
            <div className={`view-session-content`}>
              <div className="view-session-details">
                <div className="view-session-controls">
                  <button onClick={()=>setModal(false)}>
                    <IoCloseSharp size={"20px"} />
                  </button>
                </div>          
                <p className="view-session-title">{session.title}</p>
                <p className="view-session-description">
                  {
                    session?.description
                  }
                </p>
                <div className="view-session-features">
                  <p className="view-session-features-title">Package Includes: </p>
                  <ul className="view-session-features-list">
                    {
                      session?.features?.length && session?.features?.map((feature,index)=>(
                        <li className="view-session-feature" key={index}>
                          {feature}
                        </li>

                      ))
                    }
                  </ul>
                </div>
                <div className="view-session-action">
                  <NavLink 
                    to={`/book-session/${session?.title}`} 
                    className="view-session-book-btn"
                    onClick={()=>setModal(false)}
                  >
                   Book <br /> Now
                  </NavLink>
                </div>
              </div>
              <div className={`view-session-right-curtain ${openCurtain ? "-translate-y-0": "-translate-y-full"}`}>
                
              </div>

            </div>

        </div>
      </div>
      
    </div>
  )
}

export default Modal
