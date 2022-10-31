import './contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="title">
        Love to hear from <span>you</span>,<br />
        Get in touch 🙌
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
  )
}

export default Contact