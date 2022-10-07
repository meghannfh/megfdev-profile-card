import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'
import { createContext, useState } from 'react'
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <div className="container" id={theme}>
        <Header />
        <Main />
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
