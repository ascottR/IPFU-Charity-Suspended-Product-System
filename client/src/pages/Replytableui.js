import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

const Replytableui = ({ rows }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Filter rows based on the search term
    const filteredRows = rows.filter(row =>
        row.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );





    return (
        <div className="app">
            <header className="app-bar">
                <img src={logo} alt="Company Logo" className="navbar-logo" style={{ width: "40px", height: "40px", marginRight: "20px" }} />
                <h1 className="navbar-company-name" style={{ fontSize: "1.2rem", fontWeight: "bold", marginRight: "5px" }}>I Paid For You</h1>
                <nav className="menu-links">
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/replyt">Manage Request</a></li>
                        <li><a href="/replycrud">Replies</a></li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <div className="table-container">
                    
               <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
  Submit Reply
</div>
                <input    // Filter rows based on the search term
  type="text"
  placeholder="Search by Name"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    marginBottom: '10px',
    padding: '10px', // Increase padding for larger size
    borderRadius: '8px', // Adjust border radius
    border: '1px solid #ccc', // Optional: Add border style
    fontSize: '16px', // Adjust font size
    width: '50%', // Ensure full width
    boxSizing: 'border-box', // Include padding within width
  }}
/>
                    <table className="table" style={{ width: '1500px', fontSize: '16px', padding: '20px', border: '2px solid black' }}>
                        <thead>
                            <tr>
                                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px', padding: '20px' }}>Name</th>
                                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>email</th>
                                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>Request</th>
                                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '18px' }}>
                            {filteredRows.length > 0 ? (
                                filteredRows.map(row => (
                                    <tr key={row.Name}>
                                        <td>{row.Name}</td>
                                        <td>{row.email}</td>
                                        <td>{row.Request}</td>
                                        <td>

                                            <button
                                                className="button"
                                                onClick={() => navigate('/replyui', { state: { name: row.Name, email: row.email, request: row.Request } })}
                                            >
                                                REPLY
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No matching data found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Replytableui;
