// src/sections/HeroCarousel/HeroCarousel.js
import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const images = [
    "https://static.vecteezy.com/system/resources/previews/036/804/331/non_2x/ai-generated-assorted-indian-food-on-dark-wooden-background-free-photo.jpg",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
    "https://img.freepik.com/free-photo/close-up-street-food-neon-light_23-2151571607.jpg",
    "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
    "https://img.freepik.com/premium-photo/culinary-creations-culinary-mastery-gastronomic-art-delicious-visuals-tasty-delights-food-aesth_497046-451.jpg"
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
        <p>Explore delicious recipes and culinary inspiration.</p>
      </div>
    </section>
  );
};

export default HeroCarousel;
