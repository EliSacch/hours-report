// hooks
import { useState } from 'react';
import { useLogout } from './hooks/useLogout';
// auth/context
import { useAuthContext } from './hooks/useAuthContext';
// components
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigation from './components/Navigation';
import Modal from './components/Modal';
// style
import './App.css';
import styles from './components/styles/Modal.module.css';


function App() {
  const { authIsReady, user } = useAuthContext();
  const [showModal, setShowModal] = useState(false);
  const { logout } = useLogout();

  const handleLogout = () => {
    setShowModal(false);
    logout();
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const handleOpen = () => {
    setShowModal(true);
  }

  return (
    <div className="App">
      {authIsReady && (
        <>
          <BrowserRouter>
            <Navigation handleOpen={handleOpen} />
            <Routes>
              <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}/>
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
              <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
            </Routes>
          </BrowserRouter>
          {showModal && (
            <Modal handleClose={handleClose} showModal={showModal} >
              <h2>Logout</h2>
              <p>Do you want to sign out?</p>
              <button onClick={handleLogout} className={styles.btn}>Confirm</button>
            </Modal>
          )}
        </>
      )}
    </div>
  );
}

export default App;
