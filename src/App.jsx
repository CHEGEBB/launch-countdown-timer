import { useState } from 'react'
import './App.scss'
import BgStars from "./images/bg-stars.svg"
import PatternHills from "./images/pattern-hills.svg"
import IconFacebook from "./images/icon-facebook.svg"
import IconInstagram from "./images/icon-instagram.svg"
import IconPinterest from "./images/icon-pinterest.svg"

function App() {

  return (
    <div className="main-container">
      <div className="top-container">
        <image 
        src={BgStars}
        alt="Background Stars"
        className="bg-stars "
        />
      </div>
      <div className="bottom-container"></div>
    </div>
  )
}

export default App
