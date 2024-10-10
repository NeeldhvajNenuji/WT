import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import StockList from './components/Stock/StockList';
import Navbar from './components/Navbar';
import { AuthContext } from './authContext';
import './App.css';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <div className="bg-dark min-vh-100 text-light">
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {isAuthenticated && <Route path="/stocks" element={<StockList />} />}
          <Route path="*" element={<div className="text-center mt-5">Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;