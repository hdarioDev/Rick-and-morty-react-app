import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import ThemeContext from './context/ThemeContext'

ReactDOM.render(
    <React.Fragment>
        <ThemeContext.Provider value="">
            <App />
        </ThemeContext.Provider>
    </React.Fragment>
    , document.getElementById('app'))