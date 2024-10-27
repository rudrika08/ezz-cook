// src/sections/FoodGallery/FoodGallery.js
import React from 'react';
import './Gallery.css';

const FoodGallery = () => {
  const foodItems = [
    { name: 'Pizza', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg' },
    { name: 'Burger', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349' },
    { name: 'Pasta', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e' },
    { name: 'Sushi', image: 'https://img.freepik.com/premium-photo/japanese-sushi_854558-1678.jpg' },
    { name: 'Salad', image: 'https://www.cookingclassy.com/wp-content/uploads/2014/11/apple-salad-2.jpg' },
  ];

  return (
    <section className="food">
    <center><h1>Ezz Cook Gallery</h1></center>
    <section className="food-gallery">
      {foodItems.map((food, index) => (
        <div key={index} className="gallery-item">
          <img src={food.image} alt={food.name} className="gallery-image" />
          <div className="overlay">
            <h3 className="food-name">{food.name}</h3>
          </div>
        </div>
      ))}
    </section>
    </section>
  );
};

export default FoodGallery;
