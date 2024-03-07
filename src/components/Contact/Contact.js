// src/components/Contact/Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file
import { useModal } from '../../context/ModelContext';

const Contact = () => {
  const { openModal } = useModal();

  const handleContactClick = () => {
    // Always open the contact modal
    openModal();
  };

  return (
    <div className="contact-container">
      <h2 onClick={handleContactClick}>Contact Us</h2>
      <p>
        Feel free to reach out to us with any questions or inquiries. 
        Our team is here to assist you.
      </p>
      {/* Add a contact form or any additional information you want to display */}
      <p>
        Mobile: 9561709090 / 7219389090 / 9730898966 / 9527904031 <br />
        Website: www.voltonixstudios.com <br />
        Email: voltonixstudios@gmail.com
      </p>
    </div>
  );
};

export default Contact;
