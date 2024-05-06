import React, { useState, useRef } from 'react';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { IoPrintSharp } from 'react-icons/io5';
import html2pdf from 'html2pdf.js';

const Replytablecrudui = ({ rows, fetchData }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const componentRef = useRef();

  const handleDelete = (Name) => {
    axios.post('http://localhost:3001/api/deletereply', { Name })
      .then(response => {
        console.log(response.data);
        fetchData(); // Call a function to refetch the updated data after deletion
      })
      .catch(error => {
        console.error('Error deleting request:', error);
      });
  };

  const handleUpdate = (Name, email, Request, Reply) => {
    navigate('/editreply', { state: { Name, email, Request } });
  };

  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Reply Summary',
  });

  const handleSavePDF = () => {
    const element = componentRef.current;
    const opt = {
      margin: 0.5,
      filename: 'reply_summary.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  // Filter rows based on the search term
  const filteredRows = rows.filter(row =>
    row.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-bar">
        <img src={logo} alt="Company Logo" className="navbar-logo" style={{ width: "40px", height: "40px", marginRight: "20px" }} />
        <h1 className="navbar-company-name" style={{ fontSize: "1.2rem", fontWeight: "bold", marginright: "5px", color: 'white' }}>I Paid For You</h1>
        <nav className="menu-links">
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/replyt">Manage Request</a></li>
            <li><a href="/replycrud">Replies</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="table-container" >
        <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
  Manage Reply
</div>

          {/* Search Input */}
          <input
  type="text"
  placeholder="Search by Name"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '50%',
    boxSizing: 'border-box',
    marginLeft: '50px', // Align input to the left
  }}
/>


          {/* Table */}
          <table className="table" style={{ width: '95%', fontSize: '16px',  marginRight: '30px',  marginLeft: '50px', padding: '20px', border: '2px solid black' }}>
          <thead>
                            <tr>
                                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px', padding: '20px' }}>Name</th>
                                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>Email</th>
                                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>Request</th>
                                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>Reply</th>
                                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>Actions</th>
                            </tr>
                        </thead>
            <tbody>
              {filteredRows.length > 0 ? (
                filteredRows.map(row => (
                  <tr key={row.Name}>
                    <td>{row.Name}</td>
                    <td>{row.email}</td>
                    <td>{row.Request}</td>
                    <td>{row.Reply}</td>
                    <td>
                    <div style={{ display: 'flex', gap: '10px' }}>
  <button
    className="button"
    onClick={() => handleUpdate(row.Name, row.email, row.Request, row.Reply)}
    style={{ padding: '10px', marginRight: '5px' }}
  >
    UPDATE
  </button>
  <button
    className="button"
    onClick={() => handleDelete(row.Name)}
    style={{ backgroundColor: '#990000', padding: '10px' }}
  >
    DELETE
  </button>
</div>

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No matching data found</td>
                </tr>
              )}
            </tbody>
          </table>
         <br/> <br/>

          {/* Print and Save Buttons */}
          <div className="print-button-container" style={{ textAlign: 'center', marginTop: '20px' }}>
  <button onClick={generatePDF} className="print-button" style={{ marginRight: '10px' }}>
    <IoPrintSharp className="print-icon" />
    Print
  </button>
  <button onClick={handleSavePDF} className="save-button">
    Save as PDF
  </button>
</div>


        </div>
      </div>

      {/* Hidden component for printing */}
      <div style={{ display: 'none' }}>
  <div ref={componentRef}>
    {/* Summary of replies displayed at the top of the PDF */}
    <p style={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '10px' }}>
      Request & Reply Summary
    </p>
    {/* Table for the data */}
    <table style={{ fontSize: '12px', borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Request</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Reply</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.Name}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.Name}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.email}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.Request}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.Reply}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default Replytablecrudui;
