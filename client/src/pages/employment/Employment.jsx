import { useEffect } from 'react'
import EmploymentCard from '../../components/employmentcard/EmploymentCard'
import './employment.scss'
import axios from 'axios'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Helmet } from 'react-helmet-async'

const Employment = () => {

  const [jobs, setJobs] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
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
    <>
      <Helmet>
        <title>Work with Nepal Helicopter Tours</title>
        <meta name='description' content="Interested to travel Nepal and meet amazing people from all around the world? Join our Awesome Team and get a chance to fulfill all our desires. " />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="employment">
        <div className="title">
          <h1>
            Join Our <span className="highlight"> Awesome Team</span>
          </h1>
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
    </>
  )
}

export default Employment