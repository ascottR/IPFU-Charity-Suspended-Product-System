import React from 'react';
import '../assets/css/CommunicationHome.css';
import img1 from '../assets/img/landing.png';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

function CommunicationHome() {
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
          <li><a href="/replyt">IPFU Manager</a></li>
        </ul>
      </nav>
    </header>




      <img
        className="untitled-design-3-1"
        alt=""
        src={img1}
        style={{ marginTop: '20px' }} />
      <b className="share-your-thoughts" style={{ fontSize: '90px', whiteSpace: 'nowrap', paddingTop: '30px' }}>Share Your Thoughts</b>
      <div className="feedback-page-child" style={{ paddingTop: '5px' }}></div>
      <button className="submit-feedback" style={{ border: 'none', textAlign: 'center', fontSize: '18px', padding: '30px 30px 15px', display: 'block', margin: '0 auto' }} variant="contained" onClick={() => navigate('/feedback')}>
        <span style={{ textAlign: 'center' }}>Submit Feedback</span>
      </button>
      <button className="submit-request" style={{ border: 'none', textAlign: 'center', fontSize: '18px', padding: '30px 20px 10px', display: 'block', margin: '0 auto' }} variant="contained" onClick={() => navigate('/request')}>
        <span style={{ textAlign: 'center' }}>Submit Request</span>
      </button>
      <b className="help-us-improve" style={{ fontSize: '60px', whiteSpace: 'nowrap', paddingTop: '40px' }}>Help us improve donations</b>
    </div>
  );
};

export default CommunicationHome;
