// src/components/RecipeCard.js
import React from 'react';
import './RecipieCard.css';

const RecipeCard = ({ name, image, onKnowMore }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={name} className="recipe-image" />
      <div className="recipe-content">
        <h3 className="recipe-title">{name}</h3>
        <button onClick={onKnowMore} className="know-more-button">Know More</button>
      </div>
    </div>
  );
};

export default RecipeCard;
