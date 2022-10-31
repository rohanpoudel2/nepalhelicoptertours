import './tour.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

import Muktinath1 from '../../images/tours/muktinath/muktinath.jpeg'
import Muktinath2 from '../../images/tours/muktinath/muktinath1.jpeg'

const Tour = () => {
  return (
    <div className="tour">
      <div className="tourHero">
        <Swiper
          style={{
            "--swiper-navigation-color": "orangered",
            "--swiper-pagination-color": "orangered",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          autoplay={
            {
              delay: 2500,
              disableOnInteraction: false
            }
          }
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiperdiv">
              <img src={Muktinath1} alt="tourIMG" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperdiv">
              <img src={Muktinath2} alt="tourIMG" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="tourDetailsSection">
        <div className="tourDetailsBarSection">

          <div className="tourDetailsBar">
            <div className="tourDetails">
              <div className="tourDetail">
                <i className="fa-solid fa-location-dot"></i>
                <span>
                  Mustang, Nepal
                </span>
              </div>
              <div className="tourDetail">
                <i className="fa-solid fa-gauge"></i>
                <span>
                  3400m
                </span>
              </div>
              <div className="tourDetail">
                <i className="fa-solid fa-map-location-dot"></i>
                <span>
                  Kathmandu, TIA
                </span>
              </div>
              <div className="tourDetail">
                <i className="fa-solid fa-angle-right"></i>
                <span>
                  Book
                  <br />
                  Now
                </span>
              </div>
            </div>
          </div>
          <div className="title">
            Overview
          </div>
          <p>
            The temple is situated on a high mountain range 3800 m and is visited during fair weather. Our Muktinath Helicopter Tour is organized who have high desire to visit the holy place Muktinath without any physical difficulties within a short time frame. Muktinath is very famous sacred place of both Hindu and Buddhist Pilgrims. Every Year, Pilgrims from different places including India come in the thousands to visit and pay homage to Lord Vishnu.
            Muktinath Heli Tour is easy and short way to visit great Muktinath (Lord Bishnu) temple in the lap of Himalayas. You will fly by Helicopter from Kathmandu to direct near Muktinath temple and 30 minutes short hike up to the Muktinath Temple. After worship and take holy bath in the 108 water spout in the temple , walk down to heli pad and fly back to Kathmandu.
          </p>
        </div>

        <div className="sidebar">
          <div className="top">
            <div className="title">
              Muktinath Helicopter Tour
              <div className="divider"> </div>
            </div>
            <div className="duration">
              <label>Duration: </label>
              <span>2 hours</span>
            </div>
            <div className="items">
              <label>Items to Bring: </label>
              <span>Valid Photo ID for all passengers</span>
            </div>
            <div className="price">
              <label>₹60000</label>
              <span>*inclusive per person</span>
            </div>
          </div>
          <div className="bottom">
            <div className="title">
              Book Now
              <div className="divider"> </div>
            </div>
            <form>
              <div className="formitem">
                <label>Number of Person</label>
                <input type="number" required />
              </div>
              <div className="formitem">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="formitem">
                <label>Contact/Whatsapp Number</label>
                <input type="number" required />
              </div>
              <div className="formitem">
                <label>Select Date</label>
                <input type="date" />
              </div>
              <div className="formitem">
                <button>Check Availability</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Tour