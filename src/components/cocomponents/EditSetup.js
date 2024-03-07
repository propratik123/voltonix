// src/components/cocomponents/EditSetup.js
import React from 'react';
import './EditSetup.css'; // Import the CSS file

const EditSetup = () => {
  return (
    <div className="edit-setup-container">
      <h2 className="setup-heading">Editing Setup</h2>
      <div className="setup-content">
        <div className="setup-description">
          <div className="description-bg">
            <p>
              Welcome to our advanced Editing Setup, equipped to handle all your video<br></br> 
              and photography editing needs. Our professionals are experts in VFX, <br></br>
              video editing, photography editing, and color grading D.I.
            </p>
            <ul>
              <li>VFX / All Video Editing</li>
              <li>All Photography Editing</li>
              <li>Color Grading D.I.</li>
            </ul>
          </div>
        </div>
        <div className="setup-image">
          <img
            src="https://i.pinimg.com/originals/36/f2/a5/36f2a508743a5a4c68e45c30d92d4d5b.jpg"
            alt="Editing Setup Image"
          />
        </div>
      </div>
    </div>
  );
};

export default EditSetup;
