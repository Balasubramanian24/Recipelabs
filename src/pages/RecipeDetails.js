import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeDetails = () => {
  const location = useLocation();
  const { id } = useParams(); // Get the ID from the URL
  const recipe = location.state?.recipe; // Fetch recipe details from state

  if (!recipe) {
    return <p className="text-center text-danger">Recipe details not found.</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">{recipe.label}</h1>
      <img
        src={recipe.image}
        alt={recipe.label}
        className="img-fluid rounded mx-auto d-block"
        style={{ maxWidth: "500px" }}
      />

      <h3 className="mt-4">Ingredients</h3>
      <ul className="list-group">
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index} className="list-group-item">
            {ingredient}
          </li>
        ))}
      </ul>

      <p className="mt-3">
        <strong>Calories:</strong> {Math.round(recipe.calories)}
      </p>

      <a
        href={recipe.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        View Full Recipe
      </a>

      <Link to="/" className="btn btn-secondary ms-3">
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetails;
