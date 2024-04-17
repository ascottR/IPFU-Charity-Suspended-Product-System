import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import back from '../assets/img/s.png';
import { PDFDownloadLink, Document, Page, Text, View } from '@react-pdf/renderer';


export default function AddEvent() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState([]);

  const [formErrors, setFormErrors] = useState({});
  const [isSendData, setIsSendData] = useState(false);

  const [img,setImg] = useState("")

  // fetch events
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
// send data to database
  const sendData = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const newEvent = {
        name,
        image,
        description,
        date,
        location
      };
  
      axios.post("http://localhost:3000/event/add", newEvent)
        .then((response) => {
          if (response.status === 200) {
            alert("Event added successfully!"); 
            setName("");
            setImage("");
            setDescription("");
            setDate("");
            setLocation("");
            setIsSendData(true);
            fetchEvents();
          } else {
            alert("Failed to add event");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  
  
// delete events
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/event/delete/${id}`)
      .then(response => {
        alert("Event deleted !"); // Displaying alert message
        console.log(response.data);
        fetchEvents(); 
      }).catch(error => {
        console.error('Error deleting event', error);
      });
  };
// validate
  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = "Event name is required!";
    }
    if (!description) {
      errors.description = "Event description is required!";
    }
    if (!date) {
      errors.date = "Event date is required!";
    }
    if (!location) {
      errors.location = "Event location is required!";
    }
    return errors;
  };

  const imageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  
  // upload images
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); 
    };
    reader.readAsDataURL(file);
  };
  const EventPDF = () => (
    <Document>
      <Page>
        <View>
          {events.map((event, index) => (
            <Text key={index}>
              Name: {event.name}, Description: {event.description}, Date: {event.date}, Location: {event.location}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );

  return (
    // event add form
    <div>
      <h1 style={{ fontFamily: 'Pacifico, cursive',fontWeight: 'norboldmal', color: '#000' }}>ADD EVENT</h1>
      <div className="manage-container">
      <img src={back} alt="back" className="background-image" style={{ width: '85%', height: '900px' }} /> 
        <form onSubmit={sendData} className="event-form">
          <div className="form-group">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter event name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <p className="error-message">{formErrors.name}</p>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="eventDescription"
              rows="4"
              placeholder="Enter event description"
              value={description}
              onChange={(e) => setDescription(e.target.value)} />
            <p className="error-message">{formErrors.description}</p>
          </div>
          <div className="form-group">
            <label htmlFor="location">Event Location</label>
            <input
              type="text"
              id="eventLocation"
              placeholder="Enter event location"
              value={location}
              onChange={(e) => setLocation(e.target.value)} />
            <p className="error-message">{formErrors.location}</p>
          </div>
          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)} />
            <p className="error-message">{formErrors.date}</p>
          </div>

          <div className="form-group">
          <label htmlFor="image">Event Image</label>
          <input
            type="file"
            id="eventImage"
            accept="image/*"
            onChange={handleUploadImage}
            placeholder="./Assets" />
          {img && <img src={img} alt="Event" />}
          
        </div>

          <button type="submit" className="add-btn" style={{ fontFamily: 'Pacifico, cursive', fontSize: '20px', fontWeight: 'bold', color: '#FFFF' }}>
            ADD EVENT
          </button>
        </form>
        {/* event update button*/}
      </div><br/><br/>
      <div className="manage-container">
      <button className="up-btn"><Link to={"/update"} style={{ fontFamily: 'Pacifico, cursive', fontSize: '16px', fontWeight: 'bold', color: '#FFFF' }}>
         UPDATE EVENTS</Link></button>
    </div><br/>
      
{/* doanload events pdf*/}
    <div className="manage-container">
        <PDFDownloadLink document={<EventPDF />} fileName="events.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download EVENTS PDF')}
        </PDFDownloadLink>
      </div>



      <div>  {/* dislay all events in a table*/}
        <h1 style={{ fontFamily: 'Pacifico, cursive',fontWeight: 'norboldmal', color: '#000' }}>All Events</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Location</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td><img src={`data:image/png;base64, ${event.image}`} alt="Event" style={{ maxWidth: '100px', maxHeight: '100px' }} />
</td>
                <td>  {/* event delete buttonn*/}
          <button className="btn" onClick={() => handleDelete(event._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        

      </div>
    </div>
  );
}
