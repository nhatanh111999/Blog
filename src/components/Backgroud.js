import '../css/Backgroud.css';
import React from 'react';

const Bubble = () => {
  return (
    <div className="bubble_container">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
  )
}

function Backgroud() {
  return (
    <div className="home-container">
      <Bubble />
    </div>
  );
}

export default Backgroud;
