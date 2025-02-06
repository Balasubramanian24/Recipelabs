import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../context/FavoriteContext';

const RecipeCard = ({ recipe }) => {
  const { favorites, addFavorite, removeFavorites } = useContext(FavoriteContext);
  const isFavorite = favorites.some((fav) => fav.uri === recipe.uri);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"> {/* This ensures the card takes a specific width */}
      <div className="card shadow-lg border-light rounded">
        <img 
          src={recipe.image} 
          alt={recipe.label} 
          className="card-img-top rounded" 
          style={{ maxHeight: '200px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.label}</h5>

          <div className="d-flex justify-content-between">
            <Link to="/recipe-detail" state={{ recipe }} className="btn btn-info">
              View Details
            </Link>

            <button
              className={`btn ${isFavorite ? "btn-danger" : "btn-outline-danger"}`}
              onClick={() => (isFavorite ? removeFavorites(recipe.uri) : addFavorite(recipe))}
            >
              {isFavorite ? "Unfavorite ❤️" : "Favorite 🤍"}
            </button>
          </div>
        </div>
      </div>
  </div>

  )
}

export default RecipeCard