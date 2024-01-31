// Why.js
import React from 'react';
import why from './frameimg.png';
import tick from './tick.png';

export default function Why() {
  return (
    <div className='Why'>
      <div class="Why-content"> 
      <h4 className='Why-color'>Why Choose Us</h4>
      <h1 className='Why-head'>Comprehensive </h1>
      <h1 className='Why-head'>Dental Services </h1>
      <div className='Why-text'>
        <div className='main-why'>
      <span>
            <img src={tick} alt="Tick icon" />
            &nbsp; &nbsp;
            <span style={{fontWeight:'bold'}}>Experienced Professionals:</span>
            &nbsp;
            Our team consists of highly skilled and knowledgeable dental experts.
      </span> <br />
      </div>
      <div className='main-why'>
      <span>
            <img src={tick} alt="Tick icon" />
            &nbsp; &nbsp;
            <span style={{fontWeight:'bold'}}>State-of-the-Art Technology: </span>
            &nbsp;
            We invest in the latest dental technology to provide the best care.
      </span> <br />
      </div>
      <div className='main-why'>
      <span >
            <img src={tick} alt="Tick icon" />
            &nbsp; &nbsp;
            <span style={{fontWeight:'bold'}}>Compassionate Care:</span>
            &nbsp;
            We treat every patient with empathy and understanding.
      </span> <br />
      </div>
      <div className='main-why'>
      <span>
            <img src={tick} alt="Tick icon" />
            &nbsp; &nbsp;
            <span style={{fontWeight:'bold'}}>Patient Education:</span>
            &nbsp;
            We believe in educating our patients about their oral health to make informed decisions.
      </span> <br />
      </div>
      <div className='main-why'>
      <span>
            <img src={tick} alt="Tick icon" />
            &nbsp; &nbsp;
            <span style={{fontWeight:'bold'}}>Convenient Hours: </span>
            &nbsp;
            We offer flexible scheduling to accommodate your busy life.
      </span> <br />
      </div>
      </div>
      </div>
      <div class="Why-image"> 
      <img src={why} width='100%' />
      </div>
    </div>
  );
}
