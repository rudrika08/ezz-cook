// src/pages/Home.jsx
import React from 'react';
import Gallery from '../../Sections/Gallery/Gallery';
import HeroCarousel from '../../Sections/HeroCarousel/HeroCarousel';
import './Home.css';



const Home = () => {
  return (
    <div className="home">
        <HeroCarousel />
        <Gallery />
    </div>
  );
};

export default Home;
