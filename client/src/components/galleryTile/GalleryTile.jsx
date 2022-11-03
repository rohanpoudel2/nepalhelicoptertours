import './gallerytile.scss'
import Muktinath from '../../images/tours/muktinath/muktinath1.jpeg'
import { useState } from 'react'
import GalleryPopup from '../galleryPopup/GalleryPopup'

const GalleryTile = () => {

  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <div className="gallerytile" onClick={() => setOpenPopUp(!openPopUp)}>
      {openPopUp &&
        <GalleryPopup image={Muktinath} />}
      <img
        src={Muktinath}
        alt="Nepal Helicopter Tours"
      />
    </div>
  )
}

export default GalleryTile