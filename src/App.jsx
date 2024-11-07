import { useState } from 'react'
import './App.scss'
import BgStars from "./images/bg-stars.svg"
import PatternHills from "./images/pattern-hills.svg"
import IconFacebook from "./images/icon-facebook.svg"
import IconInstagram from "./images/icon-instagram.svg"
import IconPinterest from "./images/icon-pinterest.svg"
import Counter from './components/counter'

function App() {

  return (
    <div className="main-container">
      <div className="container">
        <div className="header">
        <img src={BgStars} alt="Background Stars" className="bg-stars" />
        </div>
        <div className="counter">
          <Counter/>
        </div>
        <div className="footer">
          <div className="socials">
            <img src={IconFacebook} alt="Facebook" className="icon-facebook" />
            <img src={IconInstagram} alt="Instagram" className="icon-instagram" />
            <img src={IconPinterest} alt="Pinterest" className="icon-pinterest" />
          </div>
          <img src={PatternHills} alt="Pattern Hills" className="pattern-hills" />
        </div>
      </div>
    </div>
  )
}

export default App
