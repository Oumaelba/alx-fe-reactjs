import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 && <p>No recipes found.</p>}
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '20px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)}>Favorite</button>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
