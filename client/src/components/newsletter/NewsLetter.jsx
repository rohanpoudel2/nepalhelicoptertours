import './newsletter.scss'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const NewsLetter = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const AddEmail = await axios.post(`/signup/${data.Email}`)
      alert(AddEmail.data.status + 'in Signing Up')
    } catch (error) {
      alert(error.response.data.msg.sqlMessage)
    }
  }

  return (
    <div className="newsletter">
      <h1>Connect with us for Exciting Announcement</h1>
      <h2>Follow us or sign up for emails</h2>
      {errors.Email?.type === 'required' && <span className='error'>*Your Email is Required</span>}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("Email", { required: true })} type="email" placeholder='Enter Your Email' />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter