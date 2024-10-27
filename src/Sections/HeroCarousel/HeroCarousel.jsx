// src/sections/HeroCarousel/HeroCarousel.js
import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871_1280.jpg",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
    "https://cdn.pixabay.com/photo/2024/03/30/21/10/ai-generated-8665555_1280.png",
    "https://t4.ftcdn.net/jpg/08/34/72/53/360_F_834725365_IVCNLYN4MORZbqXrtsx2qlB0SS6wPNw1.jpg",
    "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYXRlZCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <section className="hero-carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="carousel-overlay">
        <h1>Welcome to EzzCook</h1>
        <p>Explore delicious recipes and culinary inspiration</p>
      </div>
    </section>
  );
};

export default HeroCarousel;
