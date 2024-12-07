import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data.json'; // Assuming data.json is in the src directory

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  // Fetch the recipe data based on the ID
  useEffect(() => {
    const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 shadow-lg rounded-lg bg-white">
      <button 
        onClick={() => navigate("/")}
        className="text-blue-500 hover:text-blue-700 mb-4">
        Back to Recipes
      </button>
      
      <div className="text-center mb-6">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg shadow-md"/>
      </div>
      
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">{recipe.title}</h1>
      <p className="text-gray-600 text-lg mb-6">{recipe.summary}</p>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Cooking Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
