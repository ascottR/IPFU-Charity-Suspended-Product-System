import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/css/ClaimRecords.css';

export default function ClaimsRecord(){

  const navigate = useNavigate()
  const [claims, setClaims] = useState([]);

  useEffect(() => loadClaims(), []);

  function loadClaims(){
    fetch('http://localhost:3001/claims')
      .then(response => response.json())
      .then(json => setClaims(json))
      .catch(error => console.error(error));
  }

  const handleDelete = (id) => {
    console.log("deleting");
    let url = 'http://localhost:3001/claims/' + id

    fetch(url, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    })
    .then(() => {
      loadClaims();
    })
    .catch(error => {
      // Handle error
      console.error('There was an error!', error);
    });
  };

  return (
    <div>
      <div className='records'>

        <table>
          <thead>
            <tr>
              <th>NO</th>
              <th>Product</th>
              <th>Receiver Name</th>
              <th>Phone Number</th>
              <th>Claimed Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              claims.map(listItem =>(
                <tr key={listItem.phone}>
              <td>{claims.indexOf(listItem)+1}</td>
              <td>{listItem.product}</td>
              <td>{listItem.name}</td>
              <td>{listItem.phoneNo}</td>
              <td>{listItem.date.slice(0, 10)}</td>
              <td className='td-btn'>
                <button className='btn-delete' onClick={() => handleDelete(listItem._id)} >Delete</button>
              </td>
            </tr>
              ))
            }
          </tbody>
        </table>

      </div>

    </div>
  )
}


