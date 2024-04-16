import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Replytableui = ({ rows }) => {
    const navigate = useNavigate();

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
                  <th style={{ color: 'black', backgroundColor: '#2ECC71',fontSize: '20px' }}>Request</th> {/* Set the text color to white */}
                  <th style={{ color: 'black', backgroundColor: '#2ECC71',fontSize: '20px' }}>Actions</th> {/* Set the text color to white */}
                </tr>
              </thead>
                        <tbody style={{ fontSize: '18px' }}>
                            {rows.length > 0 ? (
                                rows.map(row => (
                                    <tr key={row.Name}>
                                        <td>{row.Name}</td>
                                        <td>{row.email}</td>
                                        <td>{row.Request}</td>
                                        <td>
                                            <button
                                                className="button"
                                                onClick={() => navigate('/replyui', { state: { name: row.Name ,email:row.email,request:row.Request} })} // Pass name as state
                                            >
                                                REPLY
                                            </button>
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
};

export default Replytableui;
