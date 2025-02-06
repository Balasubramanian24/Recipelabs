import React, { createContext, useEffect, useState } from 'react'

export const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, [])

    // Save favorites to localStorage whenever they change

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Add a recipe to favorites

    const addFavorite = (recipe) => {
        setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    }

    //Remove recipe from favorites
    const removeFavorites = (recipeUri) => {
        setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.uri !== recipeUri)
    )
}

    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorites }} >
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteProvider;