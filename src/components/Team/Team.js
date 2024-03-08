// src/components/Team/Team.js
import React from 'react';
import Modal from 'react-modal';
import './Team.css';
import { useModal } from '../../context/ModelContext';

const Team = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const imgSrc = "/images/Koregaon branch.jpg"; // Replace with your image path

  return (
    <div className="team-container">
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Our Team"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <img src={imgSrc} alt="Team Member" />
        </div>
      </Modal>
    </div>
  );
};

export default Team;
