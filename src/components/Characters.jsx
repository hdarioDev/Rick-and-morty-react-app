import React, { useState, useContext, useEffect, useRef } from "react"
import Search from "../components/Search"
import { useCharacters } from "../hooks/useCharacters"
import { CharacterItem } from "./CharacterItem"
import { FavoritesContext } from '../context/FavoritesContext'
import { API } from '../utils/env'

function Characters({ darkMode }) {


  const [search, setSearch] = useState("")

  const characters = useCharacters(API)

  const { favorites, setFavorites } = useContext(FavoritesContext)

  //BUSCADOR NORMAL
  const filteredUsers = characters.filter((users) => {
    return users.name.toLowerCase().includes(search.toLowerCase())
  })

  const ref = useRef(null);

  const scroll = () => {
    ref.scrollX += 20;
  };

  useEffect(() => {
    if (characters.length == filteredUsers.length) {
      const getFavorites = () => {
        setFavorites(characters.slice(0, 10))
      }
      getFavorites()
    }
  }, [characters])

  //USE MEMo
  // const filteredUsers = useMemo(()=>(
  //   characters.filter((users) =>{
  //     return users.name.toLowerCase().includes(search.toLowerCase())
  //   }),
  //   [characters, search] //params que va a escuchar
  // ))


  return (
    <React.Fragment>
      <Search search={search} setSearch={setSearch} />
      {favorites.length > 0 &&
        <div className="favorites--container" ref={ref}>
          {favorites.map((favorite) => (
            <article key={favorite.id}> <img src={favorite.image} alt={`Image ${favorite.name}`} /></article>
          ))}
        </div>

      }

      <div className="Characteres-item">

        {filteredUsers.map((character) => (

          <CharacterItem darkMode={darkMode} key={character.id} character={character} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Characters;
