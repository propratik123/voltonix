// src/components/cocomponents/Films.js
import React from 'react';
import './Films.css'; // Import the CSS file

const Films = () => {
  return (
    <div className="films-container">
      <h2 className="films-heading">Films Studio</h2>
      <div className="films-content">
        <div className="films-description">
          <div className="description-bg">
            <p>
              Welcome to our Films Studio, where creativity meets storytelling. <br />
              Whether it's pre-post production, web series, social media marketing design, <br />
              multi-camera events, or corporate AV, we bring your ideas to life.
            </p>
            <ul>
              <li>Pre-Post Production</li>
              <li>Webseries & Add Films</li>
              <li>SMM / Seo Designing</li>
              <li>Multi Camera Events</li>
              <li>Youtube Live Streams / Corporate AV</li>
            </ul>
          </div>
        </div>
        <div className="films-image">
          <img
            src="https://res.cloudinary.com/project-casting/image/upload/v1648224926/strapi-upload/staging/Film_production_roles_68cafbfbc8.jpg"
            alt="Films Studio Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Films;
