import React from 'react'
import './paymentTab.scss'
import QR from './images/QR.jsx'

const paymentTab = () => {
  return (
    <div className='paymentTab'>
      <h2 className='payHeader'>Payment</h2>
      <p className='paymentContent'>
        <p className='payText'>
          Pay your annual CSES Subscription Fee (AY 2025-26). <br />
          <br />
          Your contribution goes towards ensuring the continuation and improvement of CSE Society activities, including maintaining our online presence, organizing workshops, and sponsoring student participation in hackathons and other competitions.
        </p>
        <QR />
      </p>
      <div className="payFormWrapper">
        <form action="" className='GForm'>
          <input type="text" className='GFormLink' name='GFormLink' placeholder='Google Form Link' />
          <span className="formArrow">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1024_688)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M54.8555 32.5523L32.2281 9.92488L28.4569 13.6961L44.6462 29.8855L10.7051 29.8854V35.2188H44.6465L28.4569 51.4085L32.2281 55.1797L54.8555 32.5523Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_1024_688">
                  <rect width="64" height="64" fill="white" transform="matrix(-1 0 0 -1 64 64)" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </form>
      </div>
    </div>
  )
}

export default paymentTab