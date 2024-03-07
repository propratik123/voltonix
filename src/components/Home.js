// src/components/Home.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import Events from './Events/Events';
import Team from './Team/Team';
import Body from './Body/Body';
import RecordingStudio from './cocomponents/RecordingStudio';
import Photography from './cocomponents/Photography';
import EditSetup from './cocomponents/EditSetup';
import Films from './cocomponents/Films'; // Import the Films component

const Home = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/cocomponents/RecordingStudio" element={<RecordingStudio />} />
          <Route path="/cocomponents/Photography" element={<Photography />} />
          <Route path="/cocomponents/EditSetup" element={<EditSetup />} />
          <Route path="/cocomponents/Films" element={<Films />} /> {/* Add Films route */}
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
