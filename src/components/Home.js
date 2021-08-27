import '../css/Home.css';
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

function Home() {
  return (
    <div className="home-container">
      <Bubble />
    </div>
  );
}

export default Home;
