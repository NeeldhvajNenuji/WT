import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center mt-5 text-light bg-dark p-5 rounded">
      <h1>Welcome to the Medical Store</h1>
      <p>Please log in or sign up to manage stock details.</p>
      <div className="mt-4">
        <Link to="/login" className="btn btn-primary m-2">Login</Link>
        <Link to="/signup" className="btn btn-secondary m-2">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;