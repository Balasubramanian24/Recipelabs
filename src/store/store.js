import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../redux/recipeSlice';
import favoriteReducer from '../redux/favoriteSlice';

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favorites: favoriteReducer,
  },
});

export default store;
