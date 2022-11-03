import './tours.scss'
import HelicopterTours from '../../images/toursbanner.jpeg'
import ToursIcon from '../../components/toursicon/ToursIcon'
import NewsLetter from '../../components/newsletter/NewsLetter'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

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
    getPosts()
  }, [])


  return (
    <div className="tours">
      <div className="hero">
        <img src={HelicopterTours} alt="herotours" />
        <div className="overlay">
          <span>Sit back, relax and enjoy the scenic view Nepal offers <br /> in the most luxurious way possible</span>
        </div>
      </div>
      <div className="middleheading">
        🚁 Explore Our Offerings 🚁
        <div className="divider"> </div>
      </div>
      <div className="toursList">
        {posts.map((data) => {
          return <ToursIcon data={data} key={data.TOURSID} />
        })}
      </div>
      <NewsLetter />
    </div>
  )
}

export default Tours