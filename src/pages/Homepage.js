import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/recipeSlice";
import FilterBar from "../components/FilterBar";
import debounce from "lodash.debounce";

const Homepage = () => {
  const dispatch = useDispatch();

  // Get recipes, loading, and error state from Redux
  const { recipes, loading, error } = useSelector((state) => state.recipes);

  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ mealType: "All Meals", diet: "All Diets" });

  // Fetch default recipes when the page loads
  useEffect(() => {
    dispatch(fetchRecipes({ query: "chicken", filters }));
  }, [dispatch]);

  // Debounce API call to optimize search
  const debouncedFetchRecipes = useCallback(
    debounce((searchQuery, activeFilters) => {
      dispatch(fetchRecipes({ query: searchQuery, filters: activeFilters }));
    }, 800), 
    [dispatch]
  );

  // Handle search input changes
  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(fetchRecipes({ query, filters }));
    }
  };

  // Fetch recipes when filters change
  useEffect(() => {
    if (query.trim() !== "") {
      debouncedFetchRecipes(query, filters);
    }
  }, [filters, query, debouncedFetchRecipes]);

  return (
    <div className="container-fluid p-5">
      <h1 className="heading">Find Delicious Recipes!</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <FilterBar filters={filters} setFilters={setFilters} />

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
