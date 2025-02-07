import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((fav) => fav.uri !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
