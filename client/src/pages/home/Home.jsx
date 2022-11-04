import './home.scss'
import Hero from "../../components/hero/Hero"
import FeaturedTrips from '../../components/featuredTrips/FeaturedTrips'
import NewsLetter from '../../components/newsletter/NewsLetter'
import FeaturedTripsReversed from '../../components/featuredTripsReversed/FeaturedTripsReversed'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Home = () => {

  const [featured, setFeatured] = useState('');
  let count = 0

  useEffect(() => {
    const getFeatured = async () => {

      try {
        const f = await axios.get('/gett');
        setFeatured(f.data.msg)
      } catch (error) {
        console.log(error)
      }

    }
    getFeatured()
  }, [])

  return (
    featured &&
    <div className="home">
      <Hero />
      <div className="greetTitle">
        🚁 Explore Your Options 🚁
        <div className="divider"> </div>
      </div>
      {featured.map((data) => {
        count++;
        if (count % 2 === 0) {
          return (
            <FeaturedTripsReversed data={data} key={nanoid()} />
          )
        } else {
          return (
            <FeaturedTrips data={data} key={nanoid()} />
          )
        }
      })}
      <NewsLetter />
    </div>
  )
}

export default Home