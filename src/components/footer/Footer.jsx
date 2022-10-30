import './footer.scss'
import FooterLogo from '../../images/logo.gif'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-item">
          <div className="title">
            Services
            <div className="divider"> </div>
          </div>
          <div className="footer-links">
            <div className="footer-link">Tours</div>
            <div className="footer-link">Weddings</div>
            <div className="footer-link">Groups</div>
            <div className="footer-link">Private Charters</div>
            <div className="footer-link">Photo Gallery</div>
            <div className="footer-link">Video Gallery</div>
          </div>
        </div>
        <div className="footer-item">
          <div className="title">
            About
            <div className="divider"> </div>
          </div>
          <div className="footer-links">
            <div className="footer-link">Why Nepal Helicopter Tours</div>
            <div className="footer-link">Contact</div>
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
            <div className="footer-link">Affiliate Program</div>
            <div className="footer-link">Employment</div>
          </div>
        </div>
        <div className="footer-logo">
          <img src={FooterLogo} alt="footer-logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer