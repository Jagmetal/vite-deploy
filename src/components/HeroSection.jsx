import React from 'react';
import logo1 from '/logo.jpg'

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <img src={logo1} alt="Trucks on Highway" className="hero-logo" />
      <div className="hero-text">
        <h1>Black Horse</h1>
        <h2>Logistics Group</h2>
      </div>
    </div>
  </section>
);

export default HeroSection;
