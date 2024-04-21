import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import img2 from '../assets/img/bg.png';
import swal from "sweetalert2";
import logo from '../assets/img/logo.png';


const EditFeedbackForm = ({ data }) => {

  const[Name ,setName] = useState("");
const[email ,setemail] = useState("");
const[Feedback ,setfeedback] = useState("");
const [action, setAction] = useState('Update');


  useEffect(() => {
    if (data?.Name && data.Name !== 0) {
      setName(data.Name|| "");
      setemail(data.email|| "");
      setfeedback(data.Feedback|| "");
    }
  }, [data]);

  const updateItem = (data) => {
    const payload = {
        Name: data.Name,
        email:data.email,
        Feedback:data.Feedback,
        
    }

    Axios.post('http://localhost:3001/api/updatefeedback', payload)
    .then(response => {
      swal.fire({
        icon: "success",
        title: "Success!",
        text: "Feedback Update successfully.",
      });
      setName("");
      setemail("");
      setfeedback("");
      navigate('/');
    })
    .catch(error => {
      console.error("Error updating feedback:", error);
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error updating feedback. Please try again later.",
      });
    });
  }
  const navigate = useNavigate();

  const handleUpdate = () => {
    console.log('EditFeedbackForm - handleUpdate - name:', Name);
    console.log('EditFeedbackForm - handleUpdate - email:', email);
    console.log('EditFeedbackForm - handleUpdate - Feedback:', Feedback);

    updateItem({ Name, email, Feedback });
    navigate('/');
  };

  return (

    


  <><header className="app-bar">
      <img src={logo} alt="Company Logo" className="navbar-logo" style={{ width: "40px", height: "40px", marginRight: "20px" }} />

      <h1 className="navbar-company-name" style={{ fontSize: "1.2rem", fontWeight: "bold", marginright: "5px",color:'white' }}>I Paid For You</h1>
      <nav className="menu-links">
        <ul>
          <li><a href="/#">Home</a></li>
          <li><a href="/feedbackui">Feedback</a></li>
          <li><a href="/requestt">Request</a></li>
          <li><a href="/replyt">Admin</a></li>
        </ul>
      </nav>
    </header><div style={{
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
          }} />

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
            <div className="google-login-wrapper" style={{ padding: '10px' }}>

            </div>
            <button className="google-login" style={{
              backgroundColor: '#008000', // Set background color
              color: 'white', // Set font color to white
              padding: '12px 24px', // Adjust padding to increase button size
              borderRadius: '8px', // Add border radius
              border: 'none', // Remove border
              cursor: 'pointer', // Change cursor to pointer on hover
              fontSize: '16px', // Adjust font size
            }}>

              <img className="google-icon" alt="" src="/google-icon.svg" />
              <span className="continue-with-google">Continue with Google</span>
            </button>


            <div className="separator-wrapper" style={{ padding: '10px' }}>
              <div className="separator">
                <div className="line-wrapper">
                  <div className="line" />
                </div>
                <span className="or" style={{fontSize: '40px' }}> Update Your Feedback</span>           
              </div>
            </div>
            <div className="your-name-label" style={{ padding: '10px' }}>
              <span className="your-full-name" htmlFor="name">  Update Your  Name</span>
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
                  }} />
              </div>
            </div>
            <div className="your-email-input" style={{ padding: '10px' }}>
              <div className="your-email-input-inner">
                <div className="your-email-address-parent">
                  <span className="your-email-address" htmlFor="email">Update e-mail Address</span>
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
                      }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="feedback-title-label" style={{ padding: '10px' }}>
              <span className="your-feedback" htmlFor="feedback">Update Feedback</span>
              <div className="rectangle-group">
                <textarea
                  className="enter-your-feedback"
                  value={Feedback}
                  placeholder="Enter Your feedback"
                  onChange={(e) => setfeedback(e.target.value)}
                  style={{
                    width: '600px', minHeight: '150px', border: '1px solid #ccc', // Add border
                    borderRadius: '5px',
                  }} />
                <div style={{ padding: '10px' }}>
                  <button onClick={handleUpdate} style={{ backgroundColor: '#008000', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontSize: '16px' }}>{action}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};


export default EditFeedbackForm;


