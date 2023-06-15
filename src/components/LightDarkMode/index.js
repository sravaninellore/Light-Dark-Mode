// Write your code here
import React, {useState} from 'react'
import './index.css'

const LightDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true)

  const handleModeToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className={`light-dark-mode-container ${
        darkMode ? 'dark-mode' : 'light-mode'
      }`}
    >
      <button className="mode-toggle-button" onClick={handleModeToggle}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default LightDarkMode
