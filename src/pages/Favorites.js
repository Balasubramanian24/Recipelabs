import React, { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="container mt-5">
      <h1 className="text-center">My Favorite Recipes ❤️</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-muted">No favorites added yet.</p>
      ) : (
        <div className="row">
          {favorites.map((recipe) => (
            <div key={recipe.uri} className="col-12">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
