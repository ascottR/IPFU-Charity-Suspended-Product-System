import './App.css';
import Navbar from './pages/Navbar';
import AddEvent from "./pages/addEvent";
import Display from './pages/Display';
import Update from './pages/Update';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br/>
        <Routes>
        
        <Route path="/" element={<Display />} />
          <Route path="/add" element={<AddEvent />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
