// src/components/cocomponents/RecordingStudio.js
import React from 'react';
import './RecordingStudio.css'; // Import your external CSS file

const RecordingStudio = () => {
  return (
    <div className="recording-studio-container">
      <h2 className="studio-heading">Welcome to Our Recording Studio</h2>

      <div className="studio-content">
        <div className="studio-image">
          <img
            src="https://www.vividgreen.co.uk/wp-content/uploads/2020/04/Studio-8-scaled-1800x1200.jpg"
            alt="Recording Studio"
          />
        </div>

        <div className="studio-description">
          <p>
            Step into a world of creativity and innovation at our state-of-the-art recording studio.
            Our professional engineers and top-notch equipment ensure that your music is captured with
            precision and quality.
          </p>

          <p>
            Services we offer:
          </p>

          <ul>
            <li>Sound / Song Recording</li>
            <li>Dubbing</li>
            <li>Background Music (BGM)</li>
            <li>Sound & Folly</li>
          </ul>

          <p>
            Our studio is equipped with the latest technology to meet the diverse needs of musicians,
            vocalists, and audio enthusiasts. Whether you're working on a solo project, a band recording,
            or a voice-over session, we provide a comfortable and professional environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecordingStudio;
