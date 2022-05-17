import React, { useState, useContext, useEffect } from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import ThemeContext from '../context/ThemeContext'
import Logo from '../assets/img/Rick_and_Morty.png'
import '../styles/Header.scss'

function Header({ setDarkMode }) {

  const [isDarkMode, setIsDarkMode] = useState(() => false);
  useEffect(() => {
    setDarkMode(isDarkMode)
  }, [isDarkMode])

  return <div className="Header">
    <h1> <img className="Header-logo" src={Logo} /></h1>
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
  </div>
}

export default Header;
