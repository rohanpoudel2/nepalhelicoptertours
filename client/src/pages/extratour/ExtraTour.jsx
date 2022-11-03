import './extratour.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

import heroImage from '../../images/toursbanner.jpeg'
import muktinath from '../../images/tours/muktinath/muktinath.jpeg'
import SideBar from '../../components/sidebar/SideBar';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ExtraTour = () => {

  const { id } = useParams();
  const [ExtraTour, setExtraTour] = useState('')
  const [allData, setAllData] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(`/getextra/${id.split('=')[1]}`);
        setExtraTour(data.data.msg[0]);
        const alldata = await axios.get('/getextra');
        setAllData(alldata.data.msg)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [ExtraTour, id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    ExtraTour &&
    <>
      <div className="extratour">
        <div className="hero">
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
                <img src={heroImage} alt="extratourImage" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperdiv">
                <img src={muktinath} alt="tourIMG" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="extratoursDesc">
          <div className="title">
            <div className="titlee">
              {ExtraTour.NAME}
              <div className="divider"> </div>
            </div>
            <button>Get Rates in NPR</button>
          </div>
          <div className="content">
            <div className="left">
              <p>
                {ExtraTour.DESCRIPTION}
              </p>
            </div>
            <div className="right">
              <SideBar data={allData} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExtraTour