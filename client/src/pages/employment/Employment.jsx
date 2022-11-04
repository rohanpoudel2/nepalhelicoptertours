import { useEffect } from 'react'
import EmploymentCard from '../../components/employmentcard/EmploymentCard'
import './employment.scss'
import axios from 'axios'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Employment = () => {

  const [jobs, setJobs] = useState('');

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await axios.get('/getJobs');
        setJobs(data.data.msg)
      } catch (error) {
        console.log(error)
      }
    }
    getJobs()
  }, [])


  return (
    jobs &&
    <div className="employment">
      <div className="title">
        Join Our <span className="highlight"> Awesome Team</span>
      </div>
      <div className="sub-title">
        See our current Job Offers below
      </div>
      <div className="jobs">
        {jobs.map((job) => {
          return (
            <EmploymentCard job={job} key={nanoid()} />
          )
        })}
      </div>
    </div>
  )
}

export default Employment