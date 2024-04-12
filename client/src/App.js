
import Navbar from './components/ReceiverNavbar';
import ReceiverHomepage from './pages/ReceiverHomepage';
import ReceiverProfilePage from './pages/ReceiverProfilePage';
import LoginPage from './pages/LoginPage';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ReceiverHomepage/>}/>
        <Route exact path='/receiverprofile' element={
        <div>
        <ReceiverProfilePage />
      </div>
        }/>
        <Route path='/login' element={<LoginPage/>}/>
    
      </Routes>
     </Router>
    </div>
  );
}

export default App;
