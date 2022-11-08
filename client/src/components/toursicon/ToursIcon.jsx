import './toursicon.scss'
import { Link } from 'react-router-dom'

const ToursIcon = ({ data }) => {

  const image = JSON.parse(data.IMAGES)

  return (
    <div className="toursicon">
      <div className="tourImage">
        <img src={image.image1} alt="tourIMG" />
      </div>
      <div className="tourDetails">
        <div className="tourTitle">{data.NAME}</div>
        <div className="tourPrice">
          <i className="fa-solid fa-tag"></i>
          ${data.PRICE}
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