import React from 'react';
import '../assets/css/Feedbackcrud_ui.css';
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Feedbackcrud_ui = ({rows , fetchData}) => {



  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false);
  const [updatedFeedback, setUpdatedFeedback] = useState("");

  const handleDelete = (Name) => {
    axios.post('http://localhost:3001/api/deletefeedback', { Name })
        .then(response => {
            console.log(response.data);
            fetchData(); // Call a function to refetch the updated data after deletion
        })
        .catch(error => {
            console.error('Error deleting feedback:', error);
        });
};

const handleUpdate = (Name, email,Feedback) => {
  navigate('/editfeedback', { state: { Name,email, Feedback } });
};
  



  return (

    <div className="app">
    <header className="app-bar">
      <div className="logo">IPFU</div>
      <nav className="menu-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="/feedbackui">Feedback</a></li>
          <li><a href="/requestt">Request</a></li>
          <li><a href="/replycrud">Replies</a></li>
        </ul>
      </nav>
    </header>
    <div className="container">
      <div className="table-container">
      <table className="table" style={{ width: '1500px', fontSize: '16px', padding: '20px', border: '2px solid black' }}>
          <thead>
                <tr>
                  <th style={{ color: 'black', backgroundColor: '#2ECC71',fontSize: '20px' ,padding: '20px'}}>Name</th> {/* Set the text color to white */}
                  <th style={{ color: 'black', backgroundColor: '#2ECC71',fontSize: '20px' }}>email</th> {/* Set the text color to white */}
                  <th style={{ color: 'black', backgroundColor: '#2ECC71',fontSize: '20px' }}>Feedback</th> {/* Set the text color to white */}
                  <th style={{ color: 'black', backgroundColor: '#2ECC71',fontSize: '20px' }}>Actions</th> {/* Set the text color to white */}
                </tr>
              </thead>

              <tbody style={{ fontSize: '18px' }}>
                {rows.length > 0 ? (
                  rows.map(row => (
                    <tr key={row.Name}>
                      <td>{row.Name}</td>
                      <td>{row.email}</td>
                      <td>{row.Feedback}</td>
                      <td>

                        <button className="button" onClick={() =>  handleUpdate( row.Name, row.email,row.Feedback) }>UPDATE</button>
                        <button className="button" onClick={() => handleDelete(row.Name)} style={{ backgroundColor: '#990000' }}>DELETE</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No Data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        </div>
  );
          }
          
export default Feedbackcrud_ui;


