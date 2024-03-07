import React from 'react';
import Home from './components/Home'
import './App.css';
import { ModalProvider } from './context/ModelContext';
function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Home />
      </ModalProvider>
      
    </div>
  );
}

export default App;
