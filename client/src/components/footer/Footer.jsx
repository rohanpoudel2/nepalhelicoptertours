import './footer.scss'
import FooterLogo from '../../images/logo.gif'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

const Footer = () => {

  const [ExtraTours, setExtraTours] = useState('');

  useEffect(() => {
    const getExtraTours = async () => {
      try {
        const data = await axios.get('/getextra');
        setExtraTours(data.data.msg)
      } catch (error) {
        console.log(error)
      }
    }
    getExtraTours()
  }, [])

  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-item">
          <div className="title">
            Services
            <div className="divider"> </div>
          </div>
          <div className="footer-links">
            {ExtraTours &&
              <>
                {ExtraTours.map((data) => {
                  const id = nanoid()
                  return (
                    <Link to={`/extra/id=${data.EXTRATOURSID}`} key={id}>
                      <div className="footer-link">{data.NAME}</div>
                    </Link>
                  )
                })}
                <Link to={`/gallery/type=Photo`}>
                  <div className="footer-link">Photo Gallery</div>
                </Link>
                <Link to={`/gallery/type=Video`}>
                  <div className="footer-link">Video Gallery</div>
                </Link>
              </>
            }
          </div>
        </div>
        <div className="footer-item">
          <div className="title">
            About
            <div className="divider"> </div>
          </div>
          <div className="footer-links">
            <Link to='/why'>
              <div className="footer-link">Why Nepal Helicopter Tours</div>
            </Link>
            <Link to='/contact'>
              <div className="footer-link">Contact</div>
            </Link>
            <div className="footer-link">FAQs</div>
            <div className="footer-link">Terms and Conditions</div>
          </div>
        </div>
        <div className="footer-item">
          <div className="title">
            Useful Links
            <div className="divider"> </div>
          </div>
          <div className="footer-links">
            <Link to='/affiliate'>
              <div className="footer-link">Affiliate Program</div>
            </Link>
            <div className="footer-link">Employment</div>
          </div>
        </div>
        <div className="footer-logo">
          <img src={FooterLogo} alt="footer-logo" />
        </div>
      </div>
      <div className="footer-bottom-bar">
        <div className="title">
          <span>We are Officially Working With:</span>
          <div className="registeredlogos">
            <div className="registeredlogo">
              <a href="https://ntb.gov.np/">
                <img src="https://ntb.gov.np/storage/media/1920/ntb_logo-1663927863_resized1920.jpg" alt="Nepal Tourism Board" />
              </a>
            </div>
            <div className="registeredlogo">
              <a href="https://nepal.gov.np/">
                <img src="https://nepal.gov.np/splash/nepal-govt.png" alt="Nepal Government" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          ©️ 2022 MacTrek & Expedition Pvt. Ltd.
        </div>
      </div>
    </div>
  )
}

export default Footer