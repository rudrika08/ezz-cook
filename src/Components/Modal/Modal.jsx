// src/components/RecipeModal.js
import React from 'react';
import './Modal.css';

const RecipeModal = ({ isOpen, onClose, recipe }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} className="modal-image" />
        <p>{recipe.description}</p>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeModal;
