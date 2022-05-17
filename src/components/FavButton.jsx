import React, { useReducer, useContext } from 'react'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
import { FavoritesContext } from '../context/FavoritesContext'
import '../styles/FavButton.scss'


const initialState = {
    favorites: [],
};
//CREAR REDUCER QUE AGREGA A FAVORITOS (informacion minima de redux)
const favoriteReducer = (state, action) => {
    console.log("favoriteReducer ", state, action)
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        default:
            return state;
    }
}

const FavButton = ({ darkMode, liked, setLiked }) => {

    const Icon = liked ? MdFavorite : MdFavoriteBorder

    const handkeLiked = () => {

        setLiked(!liked)

    }
    return (
        <button onClick={handkeLiked} className={darkMode ? "FavButton dark-mode-favorite" : "FavButton light-mode-favorite"}>
            <Icon size="32px" />
        </button>
    )
}

export default FavButton