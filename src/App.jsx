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
            <div className="facebook">
              <img src={IconFacebook} alt="Facebook" />
            </div>
            <div className="instagram">
              <img src={IconInstagram} alt="Instagram" />
              </div>
            <div className="pinterest">
              <img src={IconPinterest} alt="Pinterest" />
              </div>
          </div>
          <img src={PatternHills} alt="Pattern Hills" className="pattern-hills" />
        </div>
      </div>
    </div>
  )
}

export default App
