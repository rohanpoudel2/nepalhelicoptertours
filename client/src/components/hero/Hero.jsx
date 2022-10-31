import './hero.scss'
import HeroVideo from '../../images/herovideo.mp4'
import HeroVideoPoster from '../../images/herovideoposter.png'

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted poster={HeroVideoPoster} src={HeroVideo}></video>
      <div className="overlay">
        <span>
          Nepal Helicopter Tours
        </span>
        <p>
          We offer a variety of Helicopter tour programs suitable for all interested in different proposes.
        </p>
      </div>
    </div>
  )
}

export default Hero