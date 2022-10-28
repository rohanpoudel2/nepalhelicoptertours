import './tours.scss'
import HelicopterTours from '../../images/toursbanner.jpg'
import ToursIcon from '../../components/toursicon/ToursIcon'
import NewsLetter from '../../components/newsletter/NewsLetter'

const Tours = () => {
  return (
    <div className="tours">
      <div className="hero">
        <img src={HelicopterTours} alt="herotours" />
        <div className="overlay">
          <span>Sit back, relax and enjoy the scenic view Nepal offers <br /> in the most luxurious way possible</span>
        </div>
      </div>
      <div className="middleheading">
        🚁 Explore Our Offerings 🚁
        <div className="divider"> </div>
      </div>
      <div className="toursList">
        <ToursIcon />
        <ToursIcon />
        <ToursIcon />
        <ToursIcon />
        <ToursIcon />
        <ToursIcon />
        <ToursIcon />
        <ToursIcon />
        <ToursIcon />
        <ToursIcon />
      </div>
      <NewsLetter />
    </div>
  )
}

export default Tours