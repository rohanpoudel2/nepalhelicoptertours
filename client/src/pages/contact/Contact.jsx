import { useEffect } from 'react';
import './contact.scss';
import { Helmet } from 'react-helmet-async';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Contact Nepal Helicopter Tours</title>
        <meta name='description' content={"Contact Nepal Helicopter Tours to get the best deals on Helicopter Packages in Nepal."} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="contact">
        <div className="title">
          <h1>
            Love to hear from <span>you</span>,<br />
            Get in touch 🙌
          </h1>
        </div>
        <form>
          <div className="form-item">
            <label>Your Name</label>
            <input type="text" placeholder='Rohan Poudel' required />
          </div>
          <div className="form-item">
            <label>Your Email</label>
            <input type="email" placeholder='rohan@email.com' required />
          </div>
          <div className="form-item">
            <label>Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>
          </div>
        </form>
        <button>Send</button>
      </div>
    </>
  )
}

export default Contact