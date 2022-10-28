import './toursicon.scss'
import Muktinath from '../../images/tours/muktinath/muktinath.jpg'

const ToursIcon = () => {
  return (
    <div className="toursicon">
      <div className="tourImage">
        <img src={Muktinath} alt="tourIMG" />
      </div>
      <div className="tourDetails">
        <div className="tourTitle">Muktinath Helicopter Tour</div>
        <div className="tourPrice">
          <i className="fa-solid fa-tag"></i>
          ₹60000
        </div>
        <div className="flightDetails">
          <div className="flightDetail">
            🛫 Departs from TIA, Kathmandu
          </div>
          <div className="flightDetail">
            ⏱️ Approx 30 min flight time
          </div>
          <div className="flightDetail">
            🗻 4400m Max Altitute From Sea Level
          </div>
        </div>
        <button>View More Details</button>
      </div>
    </div>
  )
}

export default ToursIcon