import './home.scss'
import Hero from "../../components/hero/Hero"
import FeaturedTrips from '../../components/featuredTrips/FeaturedTrips'
import NewsLetter from '../../components/newsletter/NewsLetter'
import FeaturedTripsReversed from '../../components/featuredTripsReversed/FeaturedTripsReversed'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Loading from '../../pages/loading/Loading'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

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
    featured ?
      <>
        <Helmet>
          <title>Featured Helicopter Tours | Nepal Helicopter Tours</title>
          <meta name='description' content="Best Handpicked Helicopter Tours in Nepal. Suitable for individuals and families looking for an ultimate travel experience in Nepal." />
          <link rel="canonical" href={window.location.href} />
        </Helmet>
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
          <div className="viewMore">
            <Link to='/tours/type="trek"'>
              <button>View More Tours</button>
            </Link>
          </div>
          <NewsLetter />
        </div >
      </> :
      <Loading />
  )
}

export default Home