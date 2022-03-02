import React from 'react';
import SocialContact from '../../common/social-contact/social-contact';
import './about.css';

function About() {
  return (
  <div className='about'>
      <div className='about-top'>
        <div className='about-photo'>
            <img src={require('../../../assets/zk-logo.png')} className='profile-img' />
        </div>
        
        
      </div>
      <div className='about-bottom'>
      <div className='about-info'>
            Greetings, I am
            <br /><span className='info-name'>Muhammad Zulkamal</span>.
            <br />I am passionate in Front-End Web and Mobile Development!
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
