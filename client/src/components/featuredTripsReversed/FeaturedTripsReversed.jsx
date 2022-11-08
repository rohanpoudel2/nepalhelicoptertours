import './featuredtripsreversed.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const FeaturedTripsReversed = ({ data }) => {

  const [image, setImage] = useState('')

  const getImage = async () => {
    try {
      const img = await axios.get(`/getFeaturedImage/${data.FeaturedToursID}`)
      setImage(JSON.parse(img.data.msg[0].IMAGES))

    } catch (error) {
    }
  }
  useEffect(() => {

    getImage()
  }, [])

  return (
    <div className="featuredtripsreversed">
      <div className="left">
        {image &&
          <img src={image.image1} alt="Helicopter Tours" />
        }
      </div>
      <div className="right">
        <div className="tripDesc">
          <div className="title">
            {data.NAME}
            <div className="divider"> </div>
          </div>
          <div className="sub-title">
            Tour Stats from
            <div className="price">
              ${data.PRICE}
            </div>
          </div>
          <div className="desc">
            <p>
              {data.DESCRIPTION}
            </p>
          </div>
        </div>
        <Link to={`/tours/type='trek'/tourID=${data.TOURSID}`}>
          <button>Book Now</button>
        </Link>
      </div>
    </div >
  )
}

export default FeaturedTripsReversed