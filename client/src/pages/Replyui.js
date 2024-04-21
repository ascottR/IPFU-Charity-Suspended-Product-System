import React, { useState } from 'react';
import axios from 'axios';
import swal from "sweetalert2";
import { useLocation, useNavigate } from 'react-router-dom';
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import logo from '../assets/img/logo.png';


function isNumeric(value) {
    return /^\d+$/.test(value);
  }
  
const Replyui = () => {

const form = useRef()

    const navigate = useNavigate();
    const location = useLocation();

    const [Reply, setReply] = useState("");
    const [name, setName] = useState(location.state ? location.state.name : "");
    const [email, setemail] = useState(location.state ? location.state.email : "");
    const [Request, setRequest] = useState(location.state ? location.state.request : "");


    function sendData(e) {
        e.preventDefault();

        if (!name || !email|| !Request || !Reply) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill reply fields.",
          });
          return;
        }


        if (isNumeric(Reply)) {
            swal.fire({
              icon: "error",
              title: "Invalid Reply",
              text: "Please enter only strings in the reply field.",
            });
            return;
          }
        
      
        const newReply = {
          Name: name,
          email:email,
          Request: Request,
          Reply: Reply
        };
      
        axios.post('http://localhost:3001/api/createreply', newReply)
          .then(() => {
            swal.fire({
              icon: "success",
              title: "Success!",
              text: "Reply submitted successfully.",
            });
           
            navigate('/replyt');
          })
          .catch((err) => {
            console.error("Error submitting reply:", err);
            swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error submitting reply. Please try again later.",
            });
          });

      }
   
  
      const sendEmail = (e1) => {
        e1.preventDefault();

        emailjs.sendForm('service_a9c190m', 'template_n2vw6h7', form.current, {publicKey: 'rzlLcTPFdFs3OebnX',})
        .then((response) => {
          console.log('Email sent successfully!' ,response);
          
         
        })
        .catch((error) => {
          console.error('FAILED...', error);
         
        });

      }
  
    return (
        <div className="app">
          <header className="app-bar">
<img src={logo} alt="Company Logo" className="navbar-logo" style={{ width: "40px", height: "40px", marginRight: "20px" }} />

<h1 className="navbar-company-name" style={{ fontSize: "1.2rem", fontWeight: "bold",  marginright: "5px",color:'white' }}>I Paid For You</h1>
      <nav className="menu-links">
        <ul>
          <li><a href="/#">Home</a></li>
          <li><a href="/feedbackui">Feedback</a></li>
          <li><a href="/requestt">Request</a></li>
          <li><a href="/replycrud">Replies</a></li>
        </ul>
      </nav>
    </header>
            
  
            <div style={{ margin: '20px auto', width: '100%', maxWidth: '900px', minHeight: '500px',padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
    <form className="reply-form">
    <div className="your-name-label" style={{ padding: '10px' }}>
            <span className="your-full-name" htmlFor="name"> Full Name</span>
          </div>
        <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', marginBottom: '10px', height: '40px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />


<div className="your-name-label" style={{ padding: '10px' }}>
            <span className="your-email" htmlFor="name"> Email</span>
          </div>
          <input
                        type="text"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        style={{ width: '100%', marginBottom: '10px', padding: '5px', height: '40px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />

        <div className="your-name-label" style={{ padding: '10px' }}>
            <span className="your-full-name" htmlFor="name"> Request</span>
          </div>
        <input
            type="text"
            value={Request}
            onChange={(e) => setRequest(e.target.value)}
            readOnly
            style={{ width: '100%', marginBottom: '10px', padding: '5px', height: '40px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
  
        <textarea
            name="reply"
            value={Reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Type your reply here..."
            rows={20}
            cols={50}
            style={{ width: '100%', marginBottom: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={sendData} style={{ backgroundColor: '#2ECC71', cursor: 'pointer', display: 'block', margin: '0 auto' , color: '#fff',padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit Reply</button>
    </form>
</div>

        </div>
    );
};

export default Replyui;