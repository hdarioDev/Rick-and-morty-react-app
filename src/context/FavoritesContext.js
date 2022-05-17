import React, { createContext, useState, useEffect } from 'react'

export const FavoritesContext = createContext()

const FavoritesProvider = (props) => {
    const [favorites, setFavorites] = useState([])

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                setFavorites
            }}
        >
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider