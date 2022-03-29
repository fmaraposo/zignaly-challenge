import React from 'react';
import Navbar from '../src/components/Navbar';
import ItemsList from '../src/components/ItemsList';
import './App.css';

function App() {
  return (
    <>
      <div id="navbar-container">
        <Navbar/>
      </div>
      <main id="main-content">
        <ItemsList />
      </main>
    </>
  );
}

export default App;
