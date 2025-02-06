import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard"

const API_URL = "https://api.edamam.com/search?q=";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes(query); 
  }, [query]); 

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${API_URL}${searchQuery}&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=5`
      );

      if(!response.ok) {
        throw new Error("Failed to fetch Recipes. Try again after some time");
      }

      const data = await response.json();

      if(data.hits.length === 0) {
        throw new Error ("No Recipes found, Try a different Recipe search !");
      }

      setRecipes(data.hits || []); 
    } catch (error) {
      setError(error.message)
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container-fluid p-5">
      <h1 className="text-center text-dark">Find Delicious Recipes!</h1>
      <SearchBar query={query} setQuery={setQuery} />

      {loading && <p className="text-center text-muted">Loading recipes...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && recipes.length === 0 && (
        <p className="text-center text-muted">No recipes found.</p>
      )}

      <div className="row mt-5">
        {recipes.map(({ recipe }) => (
          <RecipeCard key={recipe.uri} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
