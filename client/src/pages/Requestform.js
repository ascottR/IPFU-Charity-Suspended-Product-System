import { useState } from "react";
import { useNavigate } from 'react-router-dom';
 import img2 from '../assets/img/bg.png';
import axios from "axios";
import logo from '../assets/img/logo.png';

import swal from "sweetalert2";

function isNumeric(value) {
  return /^\d+$/.test(value);
}


const Requestform = () => {

const[Name ,setName] = useState("");
const[email ,setemail] = useState("");
const[Request ,setrequest] = useState("");

function sentData(e) {
  e.preventDefault();

  if (!Name || !email || !Request) {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields.",
    });
    return;
  }
 
  if (isNumeric(Request)) {
    swal.fire({
      icon: "error",
      title: "Invalid Request",
      text: "Please enter only strings in the request field.",
    });
    return;
  }

  if(!email.includes("@")){
    swal.fire({
      icon: "error",
      title: "Invalid email",
      text: "Please enter valid email address.",
    });
    return;
  }
  
  if (isNumeric(Name)) {
    swal.fire({
      icon: "error",
      title: "Invalid Name",
      text: "Please enter only strings in the name field.",
    });
    return;
  }
  const newRequest = {
    Name,
    email,
    Request
  };

  axios.post('http://localhost:3001/api/createrequest', newRequest)
    .then(() => {
      swal.fire({
        icon: "success",
        title: "Success!",
        text: "Request submitted successfully.",
      });
      setName("");
      setemail("");
      setrequest("");
      navigate('/'); 
    })
    .catch((err) => {
      console.error("Error submitting request:", err);
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error submitting reqyest. Please try again later.",
      });
    });
}




  const navigate = useNavigate();
  return (

    <div className="app">
     


<header className="app-bar">
<img src={logo} alt="Company Logo" className="navbar-logo" style={{ width: "40px", height: "40px", marginRight: "20px" }} />

<h1 className="navbar-company-name" style={{ fontSize: "1.2rem", fontWeight: "bold",  marginright: "5px" ,color:'white'}}>I Paid For You</h1>
      <nav className="menu-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="/feedbackui">Feedback</a></li>
          <li><a href="/requestt">Request</a></li>
        </ul>
      </nav>
    </header>



    <div style={{
        position: 'relative', // Make the parent container relative
        width: '100vw', // Set width to full viewport width
        height: '100vh', // Set height to full viewport height
      }}>
        {/* Image covering the whole screen */}
        <img
          alt=""
          src={img2}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1 // Send the image to the back
          }}
        />

        {/* Feedback form */}
        <div className="frame" style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          bottom: '10%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'flex-end',
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          background: "#FFFFFF",
          minHeight: "70vh",
          padding: '20px',
        }}>
        <div className="submit-button" style={{ textAlign: 'center', padding: '20px' }}>
       

          
          <div className="separator-wrapper" style={{ padding: '10px' }}>
            <div className="separator">
              <div className="line-wrapper">
                <div className="line" />
              </div>
              <span className="or" style={{fontSize: '40px' }}>Submit Your Request</span>
            </div>
          </div>
          <div className="your-name-label" style={{ padding: '10px' }}>
            <span className="your-full-name" htmlFor="name"> Your Full Name</span>
          </div>
          <div className="submit-feedback-button-wrapper" style={{ padding: '10px' }}>
            <div className="submit-feedback-button">
              <input
                className="enter-your-full"
                type="text"
                placeholder="Enter Your Full Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
style={{
                         width: '100%', 
                              fontSize: '1.0rem',
                          padding: '8px', // Adjust padding
                         border: '1px solid #ccc', // Add border
                                    borderRadius: '5px', // Add border radius
                                }}              />
            </div>
          </div>
          <div className="your-email-input" style={{ padding: '10px' }}>
            <div className="your-email-input-inner">
              <div className="your-email-address-parent">
                <span className="your-email-address" htmlFor="email">Your e-mail Address</span>
                <div className="vector-group">
                  <img className="frame-item" alt="" src="/rectangle-233.svg" />
                  <input
                    className="enter-your-email"
                          type="email"
                              placeholder="Enter Your email address"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                             style={{
                         width: '100%', 
                              fontSize: '1.0rem',
                          padding: '8px', // Adjust padding
                         border: '1px solid #ccc', // Add border
                                    borderRadius: '5px', // Add border radius
                                }}/>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-title-label" style={{ padding: '10px' }}>
            <span className="your-request" htmlFor="request">Enter Your Request</span>
            <div className="rectangle-group">
              <textarea
                className="enter-your-request"
                value={Request}
                placeholder="Enter Your request"
                onChange={(e) => setrequest(e.target.value)}
                style={{ width: '600px', minHeight: '150px',  border: '1px solid #ccc', // Add border
                borderRadius: '5px', }}
              />
<div style={{ padding: '10px' }}>
  <button onClick={sentData} style={{ backgroundColor: '#008000', color: 'white', border: 'none', margin: '0 auto', padding: '12px 24px', borderRadius: '8px', fontSize: '16px' }}>Submit Request</button>
</div>


</div>
            </div>
         
</div>


          </div>
      



        </div>
        </div>
      




    
 



  
  );
}

export default Requestform;