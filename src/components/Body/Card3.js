// src/components/Body/Card3.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Card1.css'; // Import the CSS file

const Card3 = () => {
  const navigate = useNavigate();

  const handleEditSetupClick = () => {
    // Navigate to the EditSetup.js component
    navigate('/cocomponents/EditSetup');
  };

  return (
    <Link to="/cocomponents/EditSetup" onClick={handleEditSetupClick} className="card-link">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">Edit Setup</h3>
          <p className="card-text">
            <ul>
              <h4><li>VFX / All Video Editing</li></h4>
              <h4><li>All Photography Editing</li></h4>
              <h4><li>Color Grading D.I.</li></h4>
            </ul>
          </p>
        </div>
        <img
          src="https://media.wired.com/photos/60dcea818a1e88a03ed5ce04/master/pass/Gear-Beef-Up-Video-Editing-PC-1124258613.jpg" // Replace with your image source
          alt="Card Image"
          className="card-image"
        />
      </div>
    </Link>
  );
};

export default Card3;
