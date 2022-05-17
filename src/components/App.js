import React, { useState } from 'react'
import Header from './Header'
import Character from './Characters'
import FavoritesProvider from '../context/FavoritesContext'
import '../styles/App.scss'

function App() {

    const [darkMode, setDarkMode] = useState(false)

    return (
        <section className={darkMode ? "App dark-mode" : "App light-mode"}>
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <FavoritesProvider>
                <Character darkMode={darkMode} />
            </FavoritesProvider>
        </section>
    )
}

export default App
