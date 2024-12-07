import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

function RecipeDetail() {
  const { id } = useParams(); // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate(); // For navigation purposes

  useEffect(() => {
    // Find the recipe based on ID from the mock data
    const foundRecipe = recipeData.find((item) => item.id === parseInt(id));
    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      navigate('/'); // Redirect to home if the recipe is not found
    }
  }, [id, navigate]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <button
        className="text-blue-500 mb-4"
        onClick={() => navigate('/')}
      >
        &lt; Back to Home
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-6 text-lg mb-6">
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <ol className="list-decimal pl-6 text-lg">
          {recipe.instructions &&
            recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
