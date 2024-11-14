// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">CRUD OPERATIONS</div>
      <div className="navbar-links">
        <Link to="/register">Register</Link>
        <Link to="/user-list">User List</Link>
      </div>
    </div>
  );
};

export default Navbar;
