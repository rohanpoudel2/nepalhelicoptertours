import './newsletter.scss'

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Connect with us</h1>
      <h3>Follow us or sign up for emails</h3>
      <div className="forms">
        <div className="socials">
          <div className="social">
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="social">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <div className="social">
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <input type="email" required placeholder='Enter Your Email' />
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default NewsLetter