
import React from 'react';
import { FaInstagram, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from Font Awesome
import './Connect.css';
const Connect = () => {
  return (
    <div className="social-icons">
      {/* Instagram Icon */}
      <a href="https://www.instagram.com/rdkfilms/?igsh=MmV2bWx5OHNlN2ky" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} color="#e4405f" /> rdkfilms
      </a>

      {/* YouTube Icon */}
      <a href="https://youtube.com/@voltonixmusic?si=0EkzeLyarsPB_Jol" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={24} color="#ff0000" /> Voltonix Music
      </a>

      <a href="https://g.co/kgs/WtHP4m9" target="_blank" rel="noopener noreferrer">
        <FaMapMarkerAlt size={24} color="#000" />Registered office
        Villa number C2, VENKATESH FLORA, Mundhwa Pune 411036
      </a>

      <a href="https://g.co/kgs/Q3w7ULA" target="_blank" rel="noopener noreferrer">
        <FaMapMarkerAlt size={24} color="#000" />Bengaluru Office
      </a>
    </div>
  );
};

export default Connect;
