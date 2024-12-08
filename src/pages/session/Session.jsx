import React, { useState,useContext, useEffect } from 'react'
import './style.css'
import { SessionCard, SessionModal, SessionSmallModal } from '../../components'
import { AppContext } from '../../store/Store';
import { SESSIONS } from './constants';
import { IoGrid,IoSearch } from "react-icons/io5";
import { FaList } from "react-icons/fa";
const Session = () => {
  const [activeView,setActiveView] = useState("GRID");
  // const [modalOpen,setModalOpen] = useState(false);
  // const [selectedSession,setSelectedSession] = useState({})
  const {modalOpen} = useContext(AppContext);

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize',handleResize);

    return () => window.removeEventListener('resize',handleResize)
  },[])

  return (
    <>
      <div className="session-page">
        <div className="landing-page-limit">
          <header className="session-header">
            <h4 className="session-heading">Ready to bring your vision to life?</h4>
            <p className="session-subheading">Choose a session and let's create magic together!</p>
          </header>
          <div className="session-filters">
            <div className="session-input-search">
              <input placeholder='Search...' type="text" />
              <span><IoSearch size={"16px"} /></span>
            </div>
            <div className="session-filter-section">
              <div className="session-sort">
                <span>Sort By: </span>
                <select aria-label='Sort'>
                  <option value="">Price Highest To Lowest</option>
                  <option value="">Price Lowest To Highest</option>
                </select>
              </div>
              <button 
                className={`session-grid ${activeView === "GRID" && "session-active-view"}`}
                onClick={()=>setActiveView("GRID")}
              >
                <IoGrid size={"16px"} />
              </button>
              <button 
                className={`session-grid ${activeView === "LIST" && "session-active-view"}`}
                onClick={()=>setActiveView("LIST")}
              >
                <FaList size={"16px"} />
              </button>
            </div>
          </div>
          <div className="sessions-list">
            {
              SESSIONS?.map((session,index)=>(
                <SessionCard 
                  img={session?.img} 
                  title={session?.title} 
                  price={session?.price} 
                  // setModal={setModalOpen} 
                  // setSession={setSelectedSession}
                  session={session}
                  key={index}
                />
              ))
            }
            <div className="sessions-list-controls">
              <button>See <br /> More</button>
            </div>
          </div>
        </div>
      </div>
        {
          modalOpen && windowWidth > 700 ?
          <SessionModal /> :
          modalOpen && windowWidth < 700 &&
          <SessionSmallModal />
        }
    </>
  )
}

export default Session
