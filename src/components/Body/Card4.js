// src/components/Body/Card4.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Card1.css'; // Import the CSS file

const Card4 = () => {
  const navigate = useNavigate();

  const handleFilmsClick = () => {
    // Navigate to the Films.js component
    navigate('/cocomponents/Films');
  };

  return (
    <Link to="/cocomponents/Films" onClick={handleFilmsClick} className="card-link">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">Films</h3>
          <p className="card-text">
            <ul>
              <h4><li>Pre-Post Production</li></h4>
              <h4><li>Webseries & Add Films</li></h4>
              <h4><li>SMM / Seo Designing</li></h4>
              <h4><li>Multi Camera Events</li></h4>
              <h4><li>Youtube Live Streams / Corporate AV</li></h4>
            </ul>
          </p>
        </div>
        <img
          src="https://www.thefilmfund.co/wp-content/uploads/2021/03/three-point-lighting-setup-1024x576.jpg" // Replace with your image source
          alt="Card Image"
          className="card-image"
        />
      </div>
    </Link>
  );
};

export default Card4;
