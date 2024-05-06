import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import welcomeImage1 from '../assets/img/d1.png';
import welcomeImage2 from '../assets/img/d3.png';

export default function Display() {
    const [events, setEvents] = useState([]);
    const [searchDate, setSearchDate] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const welcomeImages = [welcomeImage1, welcomeImage2];

    // Fetch events from the database
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('http://localhost:3000/event/');
                setEvents(res.data);
            } catch (err) {
                alert(err.message);
            }
        };
        fetchEvents();
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % welcomeImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Filter events based on the search date
    const filteredEvents = events.filter(event => {
        if (!searchDate) {
            return true;
        }
        return event.date === searchDate;
    });

    return (
        <div className="display">
            <h1 style={{ fontFamily: 'Pacifico, cursive', fontWeight: 'normal', color: '#000' }}>DONATION PROGRAMMES</h1>
            <div className="welcome-image-container">
                <img
                    src={welcomeImages[currentImageIndex]}
                    alt="Welcome"
                    style={{ width: '100%', height: '500px' }}/>
            </div>
            {/* Search bar for date */}
            <div className="search-bar"  style={{ width: '50%' }}>
              <br/><br/>
                <label htmlFor="searchDate">Search Events by Date: </label>
                <input
                    type="date"
                    id="searchDate"
                    value={searchDate}
                    onChange={e => setSearchDate(e.target.value)}
                    style={{ fontSize: '16px' }}
                /><br/>
            </div><br/>

            {/* Display filtered events */}
            <ul className="all">
                {filteredEvents.map(event => (
                    <li key={event.id} className="event-box">
                        <strong>
                            <h2 style={{ fontFamily: 'Pacifico, cursive', fontSize: '24px', fontWeight: 'bold', color: '#111' }}>
                                {event.name}
                            </h2>
                        </strong>
                        <br />
                        {event.image && <img src={event.image} alt={event.name} className="event-image" />}
                        <br /><br />
                        <span style={{ fontSize: '19px' }}>: {event.description}</span><br /><br />
                        <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '16px', fontWeight: 'bold', color: '#222' }}>
                            Date: {event.date}
                        </span>
                        <br /><br />
                        Location: {event.location}
                        <br /><br />
                        <button style={{ fontFamily: 'Pacifico, cursive', fontSize: '18px', fontWeight: 'normal', color: '#FFFF' }} className="donate-btn">
                        <Link to ="/payment" className="nav-link">  DONATE for the event</Link>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
