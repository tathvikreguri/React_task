import React from 'react';
import './App.css';
import  Header2 from './Components/Header2.js';
import FastSection from './Components/FastSection.js';
import chrome from './chrome.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <img src="https://icons.iconarchive.com/icons/google/chrome/128/Google-Chrome-icon.png" alt="Chrome Logo" className="chrome-logo" />
          <p>Chrome</p>
          <ul className="nav-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#">The Features by Google</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
     <center><img src="https://icons.iconarchive.com/icons/google/chrome/128/Google-Chrome-icon.png" alt="Chrome Logo" className="chrome-logo2" /></center>
      <div className="card" ml-50><h1 style={{fontSize:"100px"}}>This browser build to be yours</h1></div>
      </section>
      <Header2/>
      <FastSection/>
    </div>
  );
}

export default App;
