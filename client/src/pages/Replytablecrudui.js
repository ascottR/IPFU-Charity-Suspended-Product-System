import React from 'react';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, View } from '@react-pdf/renderer';

const Replytablecrudui = ({ rows, fetchData }) => {
  const navigate = useNavigate();

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

  const RequestPDF = ({ Request }) => (
    <Document>
      <Page>
        <View>
          <Text>
            Name: {Request.Name}, Email: {Request.email}, Request: {Request.Request}
          </Text>
        </View>
      </Page>
    </Document>
  );
  


  
  return (
    <div className="app">
      <header className="app-bar">
        <img src={logo} alt="Company Logo" className="navbar-logo" style={{ width: "40px", height: "40px", marginRight: "20px" }} />
        <h1 className="navbar-company-name" style={{ fontSize: "1.2rem", fontWeight: "bold", marginright: "5px",color:'white' }}>I Paid For You</h1>
        <nav className="menu-links">
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/replyt">Manage Request</a></li>
            <li><a href="/replycrud">Replies</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
      <div className="table-container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '50px', paddingTop:'0px' }}>Manage Reply</div>
          <table className="table" style={{ width: '1500px', fontSize: '16px', padding: '20px',border: '2px solid black' }}>
            <thead>
              <tr>
                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px', padding: '20px' }}>Name</th>
                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>Email</th>
                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>Request</th>
                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>Reply</th>
                <th style={{ color: 'black', backgroundColor: '#2ECC71', fontSize: '20px' }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '16px' }}>
              {rows.length > 0 ? (
                rows.map(row => (
                  <tr key={row.Name}>
                    <td>{row.Name}</td>
                    <td>{row.email}</td>
                    <td>{row.Request}</td>
                    <td>{row.Reply}</td>
                    <td>
                      <button className="button" onClick={() => handleUpdate(row.Name, row.email, row.Request, row.Reply)}>UPDATE</button>
                      <button className="button" onClick={() => handleDelete(row.Name)} style={{ backgroundColor: '#990000' }}>DELETE</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No Data</td>
                </tr>
              )}
            </tbody>
          </table><br/>
          <div className="manage-container">
          <PDFDownloadLink document={<RequestPDF Request={rows} />} fileName="requests.pdf">
  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download REQUESTS PDF')}
</PDFDownloadLink>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Replytablecrudui;
