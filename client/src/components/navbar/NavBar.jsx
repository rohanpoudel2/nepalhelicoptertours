import './navbar.scss'
import logo from '../../images/logo.gif'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {

  const [responsiveNav, setResponsiveNav] = useState(false);

  const location = useLocation();

  const page = location.pathname.split('/')[1]


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
          <div className="nav-element" id='mobile'>
            <button>
              <i className="fa-brands fa-whatsapp"></i>
              <span>Connect with us</span>
            </button>
          </div>
          <div className={`nav-element ${page === '' && 'active'}`}><Link onClick={() => setResponsiveNav(!responsiveNav)} to='/'>Home</Link></div>
          <div className={`nav-element ${page === 'tours' && 'active'}`}><Link onClick={() => setResponsiveNav(!responsiveNav)} to="/tours/type='trek'">Helicopter Treks</Link></div>
          <div className={`nav-element ${page === 'contact' && 'active'}`}><Link onClick={() => setResponsiveNav(!responsiveNav)} to='/contact'>Contact</Link></div>
          <div className="nav-element" id='desktop'>
            <a href="https://wa.me/9779851038450?text=Hello%2C%20I%20have%20a%20question%20about%20your%20services.%20Can%20you%20please%20help%3F" target='_blank' rel="noreferrer">
              <button>
                <i className="fa-brands fa-whatsapp"></i>
                <span>Connect with us</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavBar