import './tours.scss'
import ToursIcon from '../../components/toursicon/ToursIcon'
import NewsLetter from '../../components/newsletter/NewsLetter'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Loading from '../../pages/loading/Loading'
import { Helmet } from 'react-helmet-async'

const Tours = () => {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const p = await axios.get('/get');
      setPosts(p.data.msg);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getPosts()
  }, [])


  return (
    <>
      <Helmet>
        <title>Helicopter Tours in Nepal</title>
        <meta name='description' content="Amazing Helicopter Tours in Nepal at an Affordable Price" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="tours">
        <div className="hero">
          <img src='https://nepalhelicoptertours.com/images/other/toursbanner.jpeg' alt="herotours" />
          <div className="overlay">
            <span>Sit back, relax and enjoy the scenic view Nepal offers <br /> in the most luxurious way possible</span>
          </div>
        </div>
        <div className="middleheading">
          🚁 Explore Our Offerings 🚁
          <div className="divider"> </div>
        </div>
        <div className="toursList">
          {
            posts ?

              posts.map((data) => {
                return <ToursIcon data={data} key={data.TOURSID} />
              })

              :
              <Loading />
          }
        </div>
        <NewsLetter />
      </div>
    </>
  )
}

export default Tours