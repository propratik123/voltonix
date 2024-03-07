import React from 'react';
import './Photography.css'; // Import the CSS file

const Photography = () => {
  return (
    <div className="recording-studio-container">
      <h2 className="studio-heading">Photography Studio</h2>
      <div className="studio-content">
        <div className="studio-description">
          <div className="description-bg">
            <p>
              Welcome to our state-of-the-art Photography Studio, where every moment is captured <br></br>
              with precision and creativity. Our team of experienced photographers is dedicated <br></br>
              to providing you with exceptional services, whether it's a timeless portfolio shoot,<br></br>
              a romantic wedding, or a dynamic commercial project.
            </p>
            <ul>
              <li>Portfolio Shoots</li>
              <li>Wedding Photography</li>
              <li>Still Photography</li>
              <li>Commercial Print Shoots</li>
              <li>AD Shoots</li>
              <li>Product Photography</li>
              <li>Cinematic Shoots</li>
              <li>Ecommerce Shoots</li>
              <li>Short Films</li>
            </ul>
          </div>
        </div>
        <div className="studio-image">
          <img
            src="https://www.tagvenue.com/blog/wp-content/uploads/2022/08/Depositphotos_166507128_XL_2000x1333-1024x682.jpg"
            alt="Studio Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Photography;
