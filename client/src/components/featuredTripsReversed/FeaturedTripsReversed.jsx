import './featuredtripsreversed.scss'
import muktinath from '../../images/tours/muktinath/muktinath.jpeg'

const FeaturedTripsReversed = () => {

  return (
    <div className="featuredtripsreversed">
      <div className="left">
        <img src={muktinath} alt="Muktinath" />
      </div>
      <div className="right">
        <div className="tripDesc">
          <div className="title">
            Muktinath Helicopter Tour
            <div className="divider"> </div>
          </div>
          <div className="sub-title">
            Tour Stats from
            <div className="price">
              ₹60000
            </div>
          </div>
          <div className="desc">
            <p>
              The temple is situated on a high mountain range 3800 m and is visited during fair weather. Our Muktinath Helicopter Tour is organized who have high desire to visit the holy place Muktinath without any physical difficulties within a short time frame. Muktinath is very famous sacred place of both Hindu and Buddhist Pilgrims. Every Year, Pilgrims from different places including India come in the thousands to visit and pay homage to Lord Vishnu.

              Muktinath Heli Tour is easy and short way to visit great Muktinath (Lord Bishnu) temple in the lap of Himalayas. You will fly by Helicopter from Kathmandu to direct near Muktinath temple and 30 minutes short hike up to the Muktinath Temple. After worship and take holy bath in the 108 water spout in the temple , walk down to heli pad and fly back to Kathmandu.
            </p>
          </div>
        </div>
        <button>Book Now</button>
      </div>
    </div >
  )
}

export default FeaturedTripsReversed