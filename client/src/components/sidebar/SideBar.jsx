import { Link } from 'react-router-dom'
import './sidebar.scss'
import { nanoid } from 'nanoid'

const SideBar = ({ data }) => {

  return (
    <div className="sidebar">
      <div className="sidebar-items">
        {data &&

          data.map((data) => {
            return (
              <Link to={`/extra/id=${data.EXTRATOURSID}`} key={nanoid()}>
                <div className="sidebar-item" >{data.NAME}</div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default SideBar