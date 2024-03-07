// src/components/Team/Team.js
import React from 'react';
import Modal from 'react-modal';
import './Team.css';
import { useModal } from '../../context/ModelContext';

const Team = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  // The button inside the modal to close it
  const closeBtn = <span className="close" onClick={closeModal}>&times;</span>;

  return (
    <div className="team-container">
      {/* Use the openModal function directly on the "Our Team" link */}
      {/* <span onClick={openModal}>Our Team</span> */}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Our Team"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          {closeBtn}
          <h2>Our Team</h2>

          {/* Display circular image with line */}
          <div className="circular-img">
            {/* Your circular image here */}
            <div className="line"></div>
          </div>

          {/* Display rectangular box with text */}
          <div className="rectangular-box">
            <p>Your text here</p>
            <div className="line"></div>
          </div>

          {/* Another circular image */}
          <div className="circular-img">
            {/* Your circular image here */}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Team;
