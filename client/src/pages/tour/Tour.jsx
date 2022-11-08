import './tour.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

import { useEffect, useState } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid'

import { Helmet } from 'react-helmet-async';

const Tour = () => {

  const location = useLocation();
  const [data, setData] = useState('');

  const tourID = location.pathname.split('/')[3].split('=')[1];

  const getData = async () => {
    try {
      const d = await axios.get(`/get/${tourID}`)
      setData(d.data.msg[0])
    } catch (error) {
      console.log(error)
    }

  }

  let images, itinery;
  if (data) {
    images = JSON.parse(data.IMAGES);
    itinery = JSON.parse(data.ITINERY);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [])

  return (
    data &&
    <>
      <Helmet>
        <title>{data.NAME} in Nepal</title>
        <meta name='description' content={data.NAME + " Package at an Affordable Price"} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
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
                <img src={images.image1} alt="tourIMG" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperdiv">
                <img src={images.image2} alt="tourIMG" />
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
                  <a href='#bookingform'>
                    <span>
                      Book
                      Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="title">
              Overview
            </div>
            <p>
              {data.DESCRIPTION}
            </p>
            <div className="itenery">
              <div className="title">Itinery</div>
              <ol>
                {itinery && itinery.content.map((data) => {
                  return (
                    <li key={nanoid()}>{data}</li>
                  )
                })}
              </ol>
            </div>
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
                <div className="item">
                  <label>Items to Bring: </label>
                  <span>Valid Photo ID for all passengers</span>
                </div>
                <div className="item">
                  <label>Route: </label>
                  <span>{data.ROUTE}</span>
                </div>
              </div>
              <div className="price">
                <label>$ {parseFloat(data.PRICE).toLocaleString(
                  undefined,
                  { minimumFractionDigits: 2 }
                )}</label>
                <span>*{data.PRICEPER}</span>
              </div>
            </div>
            <div className="bottom">
              <div className="title">
                Book Now
                <div className="divider"> </div>
              </div>
              <form id='bookingform' action='https://formsubmit.co/b024c793a89e76dbbae3337ece0b0131' method='POST'>
                <input type="text" value={data.NAME} name="Trip" hidden />
                <div className="formitem">
                  <label>Number of Person</label>
                  <input type="number" name="Number of Person" required />
                </div>
                <div className="formitem">
                  <label>Email</label>
                  <input type="email" name="Email" required />
                </div>
                <div className="formitem">
                  <label>Contact/Whatsapp Number</label>
                  <input type="text" name="Contact Number" required />
                </div>
                <div className="formitem">
                  <label>Select Date</label>
                  <input type="date" name="Trip Date" required />
                </div>
                <div className="formitem">
                  <button type='submit'>Check Availability</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

export default Tour