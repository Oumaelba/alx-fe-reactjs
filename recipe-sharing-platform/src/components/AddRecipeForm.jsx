import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({}); // Initialize errors state

  // Validate the form fields
  const validate = () => {
    const newErrors = {};

    if (!title) newErrors.title = 'Recipe title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!steps) newErrors.steps = 'Preparation steps are required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate(); // Validate form
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Set errors state
      return; // Don't submit the form if there are validation errors
    }

    // If no errors, reset errors state
    setErrors({});

    // Optionally, process ingredients into an array
    const ingredientsArray = ingredients.split(',').map(item => item.trim());

    const newRecipe = {
      title,
      ingredients: ingredientsArray,
      steps,
    };

    console.log('New Recipe:', newRecipe); // Replace with API call to save recipe

    // Clear form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add a New Recipe</h2>
      
      {/* Display validation errors */}
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 mb-4">
          {Object.values(errors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>} {/* Error message */}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter ingredients (separate with commas)"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>} {/* Error message */}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter preparation steps"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>} {/* Error message */}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
