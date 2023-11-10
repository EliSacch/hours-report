// hooks
import { useState } from 'react';
// components
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigation from './components/Navigation';
import Modal from './components/Modal';
// style
import './App.css';


function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  }

  const handleOpen = () => {
    setShowModal(true);
  }
 
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation handleOpen={handleOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      { showModal && <Modal handleClose={handleClose} showModal={showModal}></Modal> }
    </div>
  );
}

export default App;
