import './employmentcard.scss'

const EmploymentCard = ({ job }) => {
  return (
    <div className="employmentcard">
      <div className="job">
        <div className="icon">
          <i className={job.ICON}></i>
        </div>
        <div className="details">
          <div className="job-title">
            {job.TITLE}
          </div>
          <div className="requirement">
            {job.DESCRIPTION}
          </div>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default EmploymentCard