import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";


import productSampleImage from '../assets/img/productSampleImage.webp'
import '../assets/css/ClaimPage.css'


export default function ClaimPage() {

  const navigate = useNavigate()

  
  const [count, setCount] = useState(23);
  const [validation, setValidation] = useState("");
  const [valid,setValid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    fetch('http://localhost:3001/claims/count')
      .then(response => response.json())
      .then(json => setCount(json.count))
      .catch(error => console.error(error));
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    setValid(true);
    setValidation("");
    const isValid = validate();
    setValid(isValid);
    if(!isValid) return;

    fetch('http://localhost:3001/claims', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if(!validate()) return;
      navigate('/claimRecord');
    })
    .catch(error => {
      // Handle error
      console.error('There was an error!', error);
    });
  };

  const validate = ()=>{

    if (formData.name === '') {
      console.log("name is empty");
      setValidation("Name cannot be empty");
      return false;
    } 

    if (formData.phone == '') {
      setValidation("Phone number cannot be empty");
      return false;
    } 
    
      if (formData.phone.length !== 10) {
        setValidation("Phone number should contain 10 digits");
        return false;
      } 
  
      

      return true;
  }

  return (
      <div className='container'>
        <div className='box1'>
          <div className='img-box'>
            <img src={productSampleImage}/>
          </div>
          <div className='product-name'>pomegranate juice</div>
        </div>
        <div className='box2'>
          <div>
            <form action="">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}  required />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" placeholder=" 0xx-xxx-xxxx"  value={formData.phone} onChange={handleInputChange} required/>
              </div>
              <button type='submit' onClick={handleSubmit} >Claim</button>
              <div className='validation'>
                {validation}
              </div>
            </form>
          </div>
          <div className='claim'>
            Available Claims : {count}
          </div>
          
        </div>
      </div>
  )
}
