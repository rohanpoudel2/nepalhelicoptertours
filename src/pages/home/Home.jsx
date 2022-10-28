import './home.scss'
import Hero from "../../components/hero/Hero"
import FeaturedTrips from '../../components/featuredTrips/FeaturedTrips'
import NewsLetter from '../../components/newsletter/NewsLetter'

const home = () => {
  return (
    <div className="home">
      <Hero />
      <div className="greetTitle">
        🚁 Explore Your Options 🚁
        <div className="divider"> </div>
      </div>
      <FeaturedTrips />
      <FeaturedTrips flip={true} />
      <FeaturedTrips />
      <NewsLetter />
    </div>
  )
}

export default home