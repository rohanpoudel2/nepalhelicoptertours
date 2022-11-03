import './toursicon.scss'
import Muktinath from '../../images/tours/muktinath/muktinath.jpeg'
import { Link } from 'react-router-dom'

const ToursIcon = ({ data }) => {
  return (
    <div className="toursicon">
      <div className="tourImage">
        <img src={Muktinath} alt="tourIMG" />
      </div>
      <div className="tourDetails">
        <div className="tourTitle">{data.NAME}</div>
        <div className="tourPrice">
          <i className="fa-solid fa-tag"></i>
          ₹{data.PRICE}
        </div>
        <div className="flightDetails">
          <div className="flightDetail">
            🛫 Departs from {data.DEPARTURE}
          </div>
          <div className="flightDetail">
            ⏱️ Approx ${data.DURATION} flight time
          </div>
          <div className="flightDetail">
            🗻 {data.ALTITUTE} Max Altitute From Sea Level
          </div>
        </div>
        <Link to={`/tours/type='trek'/tourID=${data.TOURSID}`}>
          <button>View More Details</button>
        </Link>
      </div>
    </div>
  )
}

export default ToursIcon