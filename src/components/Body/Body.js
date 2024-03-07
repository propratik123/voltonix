// src/components/Body/Body.js
import React from 'react';
import './Body.css'; 
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4'; 
import Contact from '../Contact/Contact';

const Body = () => {
  return (
    <div>
      <p className="welcome-text">
        Welcome to Voltonix Music, your ultimate destination for music experiences! 
        Discover a world of musical wonders, exciting events, and a passionate team dedicated to creating unforgettable moments.
      </p>
      <h2><span>What We Offer</span></h2>
      {/* Add more content or functionality related to what your website offers */}
      <div>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
      <Contact />
    </div>
  );
};

export default Body;
