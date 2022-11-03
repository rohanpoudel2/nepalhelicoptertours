import './tour.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

import Muktinath1 from '../../images/tours/muktinath/muktinath.jpeg'
import Muktinath2 from '../../images/tours/muktinath/muktinath1.jpeg'
import { useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Tour = () => {

  const location = useLocation();
  const [content, setContent] = useState('');

  const tourID = location.pathname.split('/')[3].split('=')[1];

  const getData = async () => {

    try {
      const d = await axios.get(`/get/${tourID}`)
      setContent(d.data.msg)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getData();
  }, [])

  return (
    content &&
    <>
      {
        content.map((data) => {
          return (
            <div className="tour" key={data.TOURSID}>
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
                          {data.DESTINATION}
                        </span>
                      </div>
                      <div className="tourDetail">
                        <i className="fa-solid fa-gauge"></i>
                        <span>
                          {data.ALTITUTE}m
                        </span>
                      </div>
                      <div className="tourDetail">
                        <i className="fa-solid fa-map-location-dot"></i>
                        <span>
                          {data.DEPARTURE}
                        </span>
                      </div>
                      <div className="tourDetail">
                        <i className="fa-solid fa-angle-right"></i>
                        <span>
                          Book
                          Now
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    Overview
                  </div>
                  <p>
                    {data.DESCRIPTION}
                  </p>
                </div>

                <div className="sidebar">
                  <div className="top">
                    <div className="title">
                      {data.NAME}
                      <div className="divider"> </div>
                    </div>
                    <div className="duration">
                      <label>Duration: </label>
                      <span>{data.DURATION}</span>
                    </div>
                    <div className="items">
                      <label>Items to Bring: </label>
                      <span>Valid Photo ID for all passengers</span>
                    </div>
                    <div className="price">
                      <label>₹{data.PRICE}</label>
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
        })
      }

    </>
  )
}

export default Tour