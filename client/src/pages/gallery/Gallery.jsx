import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GalleryTile from '../../components/galleryTile/GalleryTile'
import './gallery.scss'

const Gallery = () => {

  const { type } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type])

  return (
    <div className="gallery">
      <div className="title">
        {type.split('=')[1]} Gallery
        <div className="divider">

        </div>
      </div>

      <div className="galleryTiles">
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
        <GalleryTile />
      </div>

    </div>
  )
}

export default Gallery