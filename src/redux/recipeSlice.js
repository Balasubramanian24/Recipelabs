import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://api.edamam.com/api/recipes/v2?type=public";
const APP_ID = "64f9462c";
const APP_KEY = "6042c4fb52bb0b23893386bff6328dd4";

// Redux Thunk to Fetch Recipes
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async ({ query = "", filters = {} }, { rejectWithValue }) => {
    try {
      let url = `${API_URL}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=4`;

      // Add search query only if it's provided
      if (query.trim()) {
        url += `&q=${encodeURIComponent(query.trim())}`;
      }

      // Apply filters dynamically
      if (filters.mealType) {
        url += `&mealType=${encodeURIComponent(filters.mealType)}`;
      }
      if (filters.diet) {
        url += `&diet=${encodeURIComponent(filters.diet)}`;
      }

      console.log("Fetching recipes from:", url); // Debugging log

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("API Response:", data); // Debugging log

      if (!data.hits || data.hits.length === 0) {
        return rejectWithValue("No recipes found.");
      }

      return data.hits; // Return only `hits` array

    } catch (error) {
      console.error("Fetch error:", error.message);
      return rejectWithValue(error.message || "Failed to fetch recipes.");
    }
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: { recipes: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch recipes.";
      });
  }
});

export default recipeSlice.reducer;
