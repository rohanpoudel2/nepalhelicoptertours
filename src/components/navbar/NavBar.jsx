import './navbar.scss'
import logo from '../../images/logo.gif'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {

  const [responsiveNav, setResponsiveNav] = useState(false);

  return (
    <div className={`navbar ${responsiveNav && 'res'}`} >
      <div className="left" >
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div >
      <div className="right">
        <div className="hamburger" onClick={() => setResponsiveNav(!responsiveNav)}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="nav-elements">
          <div className="nav-element"><Link to='/'>Home</Link></div>
          <div className="nav-element"><Link to="/tours/type='trek'">Helicopter Treks</Link></div>
          <div className="nav-element"><Link to="/tours/type='tours'">Helicopter Tours</Link></div>
          <div className="nav-element"><Link to='/'>About Us</Link></div>
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