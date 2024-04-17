import React, { useState, useEffect } from "react";
import axios from "axios";
import back from '../assets/img/qqqq.png';

function Update() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get("http://localhost:3000/event/")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEventSelection = (eventId) => {
    const selectedEvent = events.find(event => event._id === eventId);
    setSelectedEvent(selectedEvent);
    setName(selectedEvent.name);
    setImage(selectedEvent.image);
    setDescription(selectedEvent.description);
    setDate(selectedEvent.date);
    setLocation(selectedEvent.location);
  };

  const handleUpdate = (eventId) => {
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0 && selectedEvent) {
      const updateEvent = {
        name,
        image,
        description,
        date,
        location
      };

      axios.put(`http://localhost:3000/event/update/${eventId}`, updateEvent)
        .then(() => {
          alert("Event updated successfully!");
          setName("");
          setImage("");
          setDescription("");
          setDate("");
          setLocation("");
          setSelectedEvent(null);
          fetchEvents();
        })
        .catch(error => {
          console.error('Error updating event', error);
        });
    }
  };


  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = "Event name is required!";
    }
    if (!date) {
      errors.date = "Event date is required!";
    }
    if (!location) {
      errors.location = "Event location is required!";
    }
    if (!description) {
      errors.description = "Event description is required!";
    }
    if (!image) {
      errors.image = "Event image is required!";
    }
    return errors;
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="update-container"><br/>
      <img src={back} alt="back" className="background-image" style={{ width: '85%', height: '800px' }} /> 
      <h1 style={{ fontFamily: 'Pacifico, cursive',fontWeight: 'norboldmal', color: '#000' }}>UPDATE EVENT</h1>
      <br/><br/>
      <div className="manage-container"><br/>
      {/*update form*/}
        <form className="event-form" onSubmit={(e) => { e.preventDefault(); }}>
          <div className="form-group">
            <label htmlFor="eventSelect">Select Event</label>
            <select id="eventSelect" onChange={(e) => handleEventSelection(e.target.value)}>
              <option value="">Select an event</option>
              {events.map(event => (
                <option key={event._id} value={event._id}>{event.name}</option>
              ))}
            </select>
          </div>
          {selectedEvent && (
            <>
              <div className="form-group">
                <label htmlFor="eventName">Event Name</label>
                <input
                  type="text"
                  id="eventName"
                  placeholder="Enter event name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className="error-message">{formErrors.name}</p>
              </div>
              <div className="form-group">
                <label htmlFor="eventDate">Event Date</label>
                <input
                  type="date"
                  id="eventDate"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <p className="error-message">{formErrors.date}</p>
              </div>
              <div className="form-group">
                <label htmlFor="eventLocation">Event Location</label>
                <input
                  type="text"
                  id="eventLocation"
                  placeholder="Enter event location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <p className="error-message">{formErrors.location}</p>
              </div>
              <div className="form-group">
                <label htmlFor="eventDescription">Event Description</label>
                <textarea
                  id="eventDescription"
                  rows="4"
                  placeholder="Enter event description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <p className="error-message">{formErrors.description}</p>
              </div>
              <div className="form-group">
                <label htmlFor="eventImage">Event Image</label>
                <input
                  type="file"
                  id="eventImage"
                  accept="image/*"
                  onChange={handleUploadImage}
                />
                {image && <img src={image} alt="Event" />}
              </div>
              <p className="error-message">{formErrors.image}</p>
              <button className="btn" onClick={() => handleUpdate(selectedEvent._id)} >UPDATE EVENT</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Update;
