import React from 'react';
import Separator from '../../common/separator/separator';
import './contact.css';
import SocialContact from '../../common/social-contact/social-contact';

function Contact() {
  return <div className='contact'>
    <Separator />
    <label className='section-title'>Contact</label>
    <div className='contact-container'>
      <div className='contact-left'>
        <p>Want to get in touch? Contact me on any of the platform</p>
        <SocialContact />
      </div>
      <div className='download'>
        <a download href={require('../../../assets/downloadable/Resume.pdf')}>
        <i class="fi fi-rr-download download-icon" ></i>
          Download Resume
        </a>
      </div>
    </div>
  </div>;
}

export default Contact;
