import React from 'react'
import './Booked.css'

const Booked = () => {
  return (
    <div className='booked container'>
      <div className='booked1'>Your Free Consultation is Booked</div>
      <div className='booked2'>We will schedule your appointment soon</div>
      <a href="/">
        <button className='btn'>Go to Home</button>
      </a>
      <div className="booked3">
        For any queries,contact us at  <a href="mailto:info@mydomain.com">info@mydomain.com </a>
        <br />
        or call <a href="tel:+11234567890">+11-234567890</a>
      </div>
    </div>
  )
}

export default Booked
