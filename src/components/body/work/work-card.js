import React from 'react';
import './work-card.css'

function WorkCard({item}) {
  return <div className='work-card'>
      <img src={item.companyLogo} className='work-logo' />
      <div className='work-info'>
          <div className='work-designation'>
          <label className='comp-designation'>{item.designation}</label>
          </div>
          <label className='company-name'>{item.company}</label>
          <div className='work-dates'> 
              <label>{item.dateJoin}</label>-<label>{item.dateEnd}</label>
          </div>
          <div className='work-desc'>
              <p>{item.work}</p>
          </div>
      </div>
  </div>;
}

export default WorkCard;
