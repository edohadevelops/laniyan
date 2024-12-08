import React,{useEffect, useState} from 'react';
import './style.css'
import { SESSIONS } from './constants';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {sessionName} = useParams();
    const [session,setSession] = useState({});

    useEffect(()=>{
        const findSession = () => {
            const theSession = SESSIONS?.find((session)=>session.title === sessionName)
            setSession(theSession)
        }
        findSession()
    },[]);

    useEffect(()=>{
        console.log("The session is: ",session)
    },[session])
  return (
    <div className='booking-page'>
      <div className="landing-page-limit">
        <div className="booking-session-details">
            <div className="booking-session-img">
                <img src={session?.img} alt={`${session?.title} image`} />
            </div>
        </div>
        <header className="session-header">
            <h4 className="session-heading">{session?.title}</h4>
            <p className="session-subheading">Choose an available date that works for you!</p>
        </header>
        <div className="booking-session-calendar">
            <p>No calender data yet</p>
        </div>
        
      </div>
    </div>
  )
}

export default Booking
