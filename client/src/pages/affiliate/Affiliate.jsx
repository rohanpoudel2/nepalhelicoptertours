import './affiliate.scss'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const Affiliate = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Affiliate Program for Helicopter Tours</title>
        <meta name='description' content="Become our Affiliate Partner and earn upto 70% on Each Sale you make via us at Nepal Helicopter Tours" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="affiliate">
        <div className="top">
          <div className="left">
            <div className="title">
              <h1>
                Earn upto <span className="percentage">70%</span> on Each Sale with <span className="highlight">Affiliate Referral</span> Program
              </h1>
            </div>
            <button>Become our Partner</button>
          </div>
          <div className="right">
            <img src='https://nepalhelicoptertours.com/images/other/affiliate.gif' alt="Affiliate Program Nepal" />
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
    </>
  )
}

export default Affiliate