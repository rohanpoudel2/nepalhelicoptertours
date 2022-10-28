import './navbar.scss'
import logo from '../../images/logo.gif'
import { useState } from 'react'

const NavBar = () => {

  const [responsiveNav, setResponsiveNav] = useState(false);

  return (
    <div className={`navbar ${responsiveNav && 'res'}`} >
      < div className="left" >
        <img src={logo} alt="logo" />
      </div >
      <div className="right">
        <div className="hamburger" onClick={() => setResponsiveNav(!responsiveNav)}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="nav-elements">
          <div className="nav-element">Home</div>
          <div className="nav-element">Helicopter Treks</div>
          <div className="nav-element">Helicopter Tours</div>
          <div className="nav-element">About Us</div>
          <div className="nav-element">
            <button>
              <i className="fa-brands fa-whatsapp"></i>
              <span>Connect with us</span>
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavBar