import React from 'react'
import SocialContact from '../../common/social-contact/SocialContact'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className="about-top">
        <div className="about-info">
            Hello There 👋 I'm Doziem Okemini. I am a 
            <br/> <span className='info-name'>web developer</span>  
            <br /> and  I love experimenting with the web.
        </div>
        <div className="about-photo">
            <img src={require('../../../Assets/coding.png')} className='picture' alt='AboutPhoto'/>
        </div>
      </div>
      <SocialContact />
    </div>
  )
}

export default About
