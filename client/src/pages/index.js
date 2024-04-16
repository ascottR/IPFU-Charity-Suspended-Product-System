import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from '../App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Feedbackcrud from './Feedbackcrud';
import Feedback from './Feedback';
import Requestform from './Requestform';
import Requesttable from './Requesttable'
import Replytable from './Replytable';
import Replyui from './Replyui'
import Replytablecrud from './Replytablecrud';
import EditFeedback from './EditFeedback';
import EditRequest from './EditRequest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
  <Routes>
    <Route path ='/' element ={<App />} />
    <Route path='/feedback' element={<Feedback />} />
    <Route path='/feedbackui' element={<Feedbackcrud />} />
    <Route path='/request' element={<Requestform />} />
    <Route path='/requestt' element={<Requesttable />} />
    <Route path='/replyt' element={<Replytable />} />
    <Route path='/replyui' element={<Replyui />} />
    <Route path='/replycrud' element={<Replytablecrud />} />
    <Route path='/editfeedback' element={<EditFeedback />} />
    <Route path='/editrequest' element={<EditRequest />} />




  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
