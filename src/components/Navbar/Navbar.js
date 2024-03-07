// src/components/Navbar/Navbar.js
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useModal } from '../../context/ModelContext'; // Import the useModal hook
import Team from '../Team/Team'; // Import Team component

const Navbar = () => {
  const logoPath = process.env.PUBLIC_URL + '/images/logo.jpeg';
  const navigate = useNavigate();
  const { openModal } = useModal(); // Use the openModal function from the context
  const contactClickCount = useRef(0);

  const handleContactClick = () => {
    contactClickCount.current += 1;

    // Check if the contact link has been clicked even times
    if (contactClickCount.current % 2 === 0) {
      // If even, navigate to the home page
      navigate('/');
    }
  };

  const handleTeamClick = () => {
    // Open the Team modal directly
    openModal();
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo section */}
        <h1 className="logo">
          <Link to="/">
            <img src={logoPath} alt="Voltonix Music Logo" className="voltonix-logo" />
          </Link>
        </h1>
        {/* Navigation links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleContactClick}>
              Contact Us
            </Link>
          </li>
          <li>
            {/* Use handleTeamClick to open the Team modal */}
            <span onClick={handleTeamClick}>Our Team</span>
          </li>
        </ul>
      </div>

      {/* Include the Team component */}
      <Team />
    </nav>
  );
};

export default Navbar;
