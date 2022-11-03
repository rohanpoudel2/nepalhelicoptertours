import './affiliate.scss'
import AffiliateImage from '../../images/affiliate.gif'
import { useEffect } from 'react'

const Affiliate = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="affiliate">
      <div className="top">
        <div className="left">
          <div className="title">
            Earn upto <span className="percentage">70%</span> on Each Sale with <span className="highlight">Affiliate Referral</span> Program
          </div>
          <button>Become our Partner</button>
        </div>
        <div className="right">
          <img src={AffiliateImage} alt="Affiliate Program Nepal" />
        </div>
      </div>
      <div className="bottom">
        <div className="title">Start Earning with 3 Easy Steps!</div>
        <div className="steps">
          <div className="step">
            <div className="icon">
              <i className="fa-solid fa-user"></i>
            </div>
            <span>Register to Become an Affiliate Partner</span>
          </div>
          <div className="step">
            <div className="icon">
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <span>Spread The Word in your community</span>
          </div>
          <div className="step">
            <div className="icon">
              <i class="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <span>Earn Commission On Each Sale</span>
          </div>
        </div>
      </div>
      <div className="policy">
        <div className="table">
          <div className="left">
            <div className="title">
              You Can <div className="line"> </div>
            </div>
            <div className="contents">
              <div className="content">
                <span>👍🏼 You can content</span>
              </div>
              <div className="content">
                <span>👍🏼 You can content</span>
              </div>
              <div className="content">
                <span>👍🏼 You can content</span>
              </div>
              <div className="content">
                <span>👍🏼 You can content</span>
              </div>
              <div className="content">
                <span>👍🏼 You can content</span>
              </div>
              <div className="content">
                <span>👍🏼 You can content</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="title">
              You Can Not <div className="line"> </div>
            </div>
            <div className="contents">
              <div className="content">
                <span>👎🏻 You can content</span>
              </div>
              <div className="content">
                <span>👎🏻 You can content</span>
              </div>
              <div className="content">
                <span>👎🏻 You can content</span>
              </div>
              <div className="content">
                <span>👎🏻 You can content</span>
              </div>
              <div className="content">
                <span>👎🏻 You can content</span>
              </div>
              <div className="content">
                <span>👎🏻 You can content</span>
              </div>
            </div>
          </div>
        </div>
        <button>Read Our Policy</button>
      </div>
    </div>
  )
}

export default Affiliate