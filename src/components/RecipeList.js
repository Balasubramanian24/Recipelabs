import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
  return (
    <div className="row mt-5">
        {recipes && recipes.length > 0 ? (
        recipes.map(({ recipe }) => <RecipeCard key={recipe.uri} recipe={recipe} />)
        ) : (
        <p className="text-center text-muted">No recipes found.</p>
        )}
    </div>
  )
}

export default RecipeList