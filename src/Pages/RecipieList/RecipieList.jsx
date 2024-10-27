// src/pages/RecipeList.js
import React, { useEffect, useState } from 'react';
import RecipeCard from '../../Components/Recipie Card/RecipieCard';
import RecipeModal from '../../Components/Modal/Modal';
import './RecipieList.css';

const RecipeList = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchMeals = async (search) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await response.json();
      setMeals(data.meals || []); // if no meals found, set to an empty array
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  // Fetch default meals on initial load
  useEffect(() => {
    fetchMeals('');
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMeals(searchTerm); // Fetch meals based on the search term
  };

  const openModal = (recipe) => {
    setSelectedRecipe({
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      description: recipe.strInstructions,
      ingredients: Array.from({ length: 5 }).map((_, i) => recipe[`strIngredient${i + 1}`]).filter(Boolean),
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="recipe-list">
      <center><h1>Ezz Recipes</h1></center>
      
      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for a meal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      
      {/* Display Meal Cards */}
      <div className="meals-grid">
        {meals.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
            onKnowMore={() => openModal(meal)}
          />
        ))}
      </div>

      {/* Modal for showing detailed information */}
      <RecipeModal isOpen={isModalOpen} onClose={closeModal} recipe={selectedRecipe} />
    </div>
  );
};

export default RecipeList;
