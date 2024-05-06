import React, { useState, useEffect } from "react";
import axios from "axios";
import back from '../assets/img/s.png';
import paypalImg from '../assets/img/paypal_img.png';
import visaImg from '../assets/img/visa_img.png';
import mastercardImg from '../assets/img/mastercard_img.png';
import americanExpressImg from '../assets/img/american_express_img.png';


export default function Payment() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [payments, setPayments] = useState([]); // Define the payments state variable
  const [formErrors, setFormErrors] = useState({});
  const [isSendData, setIsSendData] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');


  // Fetch payments
  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = () => {
    axios.get("http://localhost:3000/payment/")
      .then((res) => {
        setPayments(res.data); // Set the payments data
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Send data to database
  const sendData = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const newPayment = {
        name,
        number,
        price,
        date,
        cvv

      };

      axios.post("http://localhost:3000/payment/pay/add", newPayment)
        .then((response) => {
          if (response.status === 200) {
            alert("Payment successful!");
            setName("");
            setNumber("");
            setPrice("");
            setDate("");
            setCvv("");
            setIsSendData(true);
            fetchPayments(); 
          } else {
            alert("Failed payment");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Method:', paymentMethod);
};

  // Validation function
  const validate = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    return errors;
  }
  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length === 0 && e.key >= '0' && e.key <= '9') {
      e.preventDefault();
    } else {
      setName(inputValue);
    }
  };
  const handleCvvChange = (e) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^0-9]/g, '').slice(0, 2);
    setCvv(filteredValue);
};

  const handleNumberChange = (e) => {
    const inputValue = e.target.value; const nonAlphabeticRegex = /[^a-zA-Z\s]/g;
    const filteredValue = inputValue.replace(nonAlphabeticRegex, '');
    setName(filteredValue);
};

  return (
    <div>
      <h1 style={{ fontFamily: 'Pacifico, cursive', fontWeight: 'normal', color: '#000' }}>PAYMENT GATEWAY</h1>
      <div className="manage-container">
        <img src={back} alt="back" className="background-image" style={{ width: '85%', height: '900px' }} />
        <form onSubmit={sendData} className="event-form">
          <div className="form-group">
            
          <div className="payment-methods">
          <label>
              <input type="radio"
                                value="PayPal"
                                checked={paymentMethod === 'PayPal'}
                                onChange={handlePaymentMethodChange} />
                       <img src={paypalImg} alt="PayPal" style={{ width: '40px' }} />
          
          <input type="radio"
                                value="Visa"
                                checked={paymentMethod === 'Visa'}
                                onChange={handlePaymentMethodChange} /> 
                                <img src={visaImg} alt="Visa" />
         </label>
                <input type="radio"
                                value="MasterCard"
                                checked={paymentMethod === 'MasterCard'}
                                onChange={handlePaymentMethodChange} />
                                <img src={mastercardImg} alt="MasterCard" />
                
                <input type="radio"
                                value="American Express"
                                checked={paymentMethod === 'American Express'}
                                onChange={handlePaymentMethodChange}/>
                                <img src={americanExpressImg} alt="American Express" />
            </div><br></br>
            <label htmlFor="name">Cardholder Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onKeyDown={handleNameChange}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p className="error-message">{formErrors.name}</p>
          </div>

          <div className="form-group">
            <label htmlFor="number">Card Number</label>
            <input
              type="number"
              className="form-control"
              id="number"
              value={number}
              onKeyDown={handleNumberChange}
              onChange={(e) => setNumber(e.target.value)}
              required
            /></div>


            <div className="form-group">
            <label htmlFor="number">Expire Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <p className="error-message">{formErrors.number}</p>
          </div>


          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="number"
              className="form-control"
              id="cvv"
              value={cvv}
              onKeyDown={handleCvvChange}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
            <p className="error-message">{formErrors.price}</p>
          </div>


          <div className="form-group">
            <label htmlFor="price">Amount</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onKeyDown={handleNumberChange}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <p className="error-message">{formErrors.price}</p>
          </div>


          <button type="submit" className="add-btn">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
