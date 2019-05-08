import React from 'react'

export default () => {
  return (
    <div className="generic-container">
      <h1>Contact Us!</h1>
      <div className="contacts">
        <div className="contact-card">
          <h3>Email</h3>
          <span>info@ess.com</span>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <span>+358 50 464 4403</span>
        </div>
        <div className="contact-card">
          <h3>Address</h3>
          <span>Hämeenkatu 21 33100 Tampere, FI</span>
        </div>
      </div>
    </div>
  )
}
