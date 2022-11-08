import './hero.scss'

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted poster='https://nepalhelicoptertours.com/images/other/herovideoposter.png' src='https://nepalhelicoptertours.com/images/other/herovideo.mp4'></video>
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