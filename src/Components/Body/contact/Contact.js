import React from 'react'
import './Contact.css'
import Seperator from '../../common/seperator/Seperator'
import SocialContact from  '../../common/social-contact/SocialContact'

function Contact() {
  return (
    <div className='contact'>
      <Seperator />
      <label className='section-title'>Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../Assets/Resume.pdf")} className='download-icon'>
            <i class="fi fi-rr-cloud-download"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
