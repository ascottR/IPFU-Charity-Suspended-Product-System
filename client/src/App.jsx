import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feedbackcrud from './pages/Feedbackcrud';
import Feedback from './pages/Feedback';
import Requestform from './pages/Requestform';
import Requesttable from './pages/Requesttable';
import Replytable from './pages/Replytable';
import Replyui from './pages/Replyui';
import Replytablecrud from './pages/Replytablecrud';
import EditFeedback from './pages/EditFeedback';
import EditRequest from './pages/EditRequest';
import EditReply from './pages/EditReply';
import CommunicationHome from './pages/CommunicationHome';


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path ='/' element ={<CommunicationHome />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/feedbackui' element={<Feedbackcrud />} />
            <Route path='/request' element={<Requestform />} />
            <Route path='/requestt' element={<Requesttable />} />
            <Route path='/replyt' element={<Replytable />} />
            <Route path='/replyui' element={<Replyui />} />
            <Route path='/replycrud' element={<Replytablecrud />} />
            <Route path='/editfeedback' element={<EditFeedback />} />
            <Route path='/editrequest' element={<EditRequest />} />
            <Route path='/editreply' element={<EditReply />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
