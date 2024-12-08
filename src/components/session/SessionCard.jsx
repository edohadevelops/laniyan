import React, { useContext, useState } from 'react'
import './style.css'
import { AppContext } from '../../store/Store';

const SessionCard = ({
    title,
    img,
    price,
    session
}) => {
    const [isHovered,setIsHovered] = useState(false);
    const {setModalOpen:setModal,setSelectedSession:setSession} = useContext(AppContext)

    const handleSessionClicked = () => {
        setSession(session)
        setModal(true)
    }
      
  return (
    <div 
        className={`session-card ${isHovered && 'scale-[1.05]'}`}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        onClick={handleSessionClicked}
    >
      <div className="session-card-img">
        <img src={img} alt={`session-img-${title}`} />
      </div>
      <div className={`session-card-details ${isHovered && "bg-gray-50 px-3"}`}>
        <p className="session-card-title">{title}</p>
        <p className="session-card-price">
            <span>N</span>
            <span> {price}</span>
        </p>
      </div>
    </div>
  )
}

export default SessionCard
