// src/components/Body/Card2.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Card1.css'; // Assuming you are reusing the same CSS styles

const Card2 = () => {
  const navigate = useNavigate();

  const handlePhotographyClick = () => {
    // Navigate to the Photography.js component
    navigate('/cocomponents/Photography');
  };

  return (
    <Link to="/cocomponents/Photography" onClick={handlePhotographyClick} className="card-link">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">Photography</h3>
          <p className="card-text">
            <ul>
              <h4><li>Portfolio Shoots</li></h4>
              <h4><li>Wedding</li></h4>
              <h4><li>Still Photography</li></h4>
              <h4><li>Print Shoots Commercial</li></h4>
              <h4><li>AD Shoots</li></h4>
              <h4><li>Product Photography</li></h4>
              <h4><li>Cinematic Shoots</li></h4>
              <h4><li>Ecommerce Shoots</li></h4>
              <h4><li>Short Films</li></h4>
            </ul>
          </p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdwwLTd5etU4q1nybUTUwmVdZjPtL1NxTGA&usqp=CAU"
          alt="Card Image"
          className="card-image"
        />
      </div>
    </Link>
  );
};

export default Card2;
