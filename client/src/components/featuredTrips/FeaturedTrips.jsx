import './featuredtrips.scss'
import muktinath from '../../images/tours/muktinath/muktinath.jpeg'
import { Link } from 'react-router-dom'

const FeaturedTrips = ({ data }) => {

  return (
    <div className="featuredtrips">
      <div className="left">
        <img src={muktinath} alt="Muktinath" />
      </div>
      <div className="right">
        <div className="tripDesc">
          <div className="title">
            {data.NAME}
            <div className="divider"> </div>
          </div>
          <div className="sub-title">
            Tour Stats from
            <div className="price">
              ₹{data.PRICE}
            </div>
          </div>
          <div className="desc">
            <p>
              {data.DESCRIPTION}
            </p>
          </div>
        </div>
        <Link to={`/tours/type='trek'/tourID=${data.TOURSID}`}>
          <button>Book Now</button>
        </Link>
      </div>
    </div >
  )
}

export default FeaturedTrips