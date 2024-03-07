// src/components/Body/Card1.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Card1.css'; // Import the CSS file

const Card1 = () => {
  const navigate = useNavigate();

  const handleRecordingStudioClick = () => {
    // Navigate to the RecordingStudio.js component
    navigate('/cocomponents/RecordingStudio');
  };

  return (
    <Link to="/cocomponents/RecordingStudio" onClick={handleRecordingStudioClick} className="card-link">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">Recording Studio</h3>
          <p className="card-text">
            <ul>
              <h4><li>Sound / Song Recording</li></h4>
              <h4><li>Dubbing</li></h4>
              <h4><li>BGM</li></h4>
              <h4><li>Sound & Folly</li></h4>
            </ul>
          </p>
        </div>
        <img
          src="https://www.musicpressasia.com/wp-content/uploads/2018/02/producer-booth.jpg" // Replace with your image source
          alt="Card Image"
          className="card-image"
        />
      </div>
    </Link>
  );
};

export default Card1;
