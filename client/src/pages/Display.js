import React, { useState, useEffect } from 'react';
import axios from "axios";
import welcomeImage1 from '../assets/img/d1.png';
import welcomeImage2 from '../assets/img/d3.png';
import { Link } from 'react-router-dom';

export default function Display() {
  const [events, setEvents] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const welcomeImages = [welcomeImage1, welcomeImage2];

  // Get events from the database
  useEffect(() => {
    function getEvents() {
      axios.get("http://localhost:3000/event/")
        .then((res) => {
          setEvents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEvents();
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % welcomeImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="display">
      <h1 style={{ fontFamily: 'Pacifico, cursive', fontWeight: 'norboldmal', color: '#000' }}>DONATION PROGRAMMES</h1>

      <div className='y'>
        <img src={welcomeImages[currentImageIndex]} alt="Welcome" style={{ width: '100%', height: '500px' }} />
      </div>

      {/* Display events */}
      <ul className="all">
        {events.map((event) => (
          <li key={event.id} className="event-box">
            <strong><h2 style={{ fontFamily: 'Pacifico, cursive', fontSize: '24px', fontWeight: 'bold', color: '#111' }}>{event.name}</h2></strong>
            <br />
            {event.image && <img src={event.image} alt={event.name} className="event-image" />}
            <br /><br />
            <span style={{  fontSize: '19px' }}>: {event.description}</span><br /><br />
            <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '16px', fontWeight: 'bold', color: '#222' }}>Date: {event.date}</span>
            <br /><br />Location: {event.location}
            <br /><br />
            <button style={{ fontFamily: 'Pacifico, cursive', fontSize: '18px', fontWeight: 'normal', color: '#FFFF' }} className="donate-btn">
              DONATE for the event</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
