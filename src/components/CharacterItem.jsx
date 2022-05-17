import React from 'react'
import { useLocalStorage } from "../hooks/useLocalStorage"
import FavButton from './FavButton'
import "../styles/Characteres-item.scss"

export const CharacterItem = ({ darkMode, character, likes = 0 }) => {
    const key = `like-${character.id}`
    const [liked, setLiked] = useLocalStorage(key, false)
    const handleLiked = () => {
        setLiked(!liked)
    }

    return (
        <article>
            <img src={character.image} alt="Photo" />
            <div className="Character-footer-container">
                <h2>{character.name}</h2>
                <FavButton darkMode={darkMode} liked={liked} likes={likes} setLiked={handleLiked} />

            </div>

        </article>
    )
}
