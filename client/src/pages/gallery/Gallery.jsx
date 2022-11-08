import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import GalleryTile from '../../components/galleryTile/GalleryTile'
import './gallery.scss'

const Gallery = () => {

  const { type } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type])

  return (
    <>
      {type.split('=')[1] === "Photo" ?
        <Helmet>
          <title>Nepal Helicopter Tours Pictures</title>
          <meta name='description' content="Pictures of some of the Helicopter Tours available in Nepal. Nepal Helicopter Tours" />
          <link rel="canonical" href={window.location.href} />
        </Helmet>
        :
        <Helmet>
          <title>Nepal Helicopter Tours Videos</title>
          <meta name='description' content="Videos of some of the Helicopter Tours available in Nepal. Nepal Helicopter Tours" />
          <link rel="canonical" href={window.location.href} />
        </Helmet>
      }

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
    </>
  )
}

export default Gallery