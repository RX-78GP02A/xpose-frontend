import React from 'react'
import GitHub from '../Images/GitHub.png';
import Envelope from '../Images/Envelope.png';
import LinkedIn from '../Images/LinkedIn.png';

import './style.css'

export default () => {
  return (
    <div>
      <p className='footer'>
    
      <a href="https://www.linkedin.com/in/marcus-ridley/"><img className="linkedIn" src={LinkedIn} alt="LinkedIn"/></a>
      <a href="https://github.com/RX-78GP02A"><img className="github" src={GitHub} alt="GitHub"/></a>
      <a href="mailto:mridley@knights.ucf.edu"><img className="envelope" src={Envelope} alt="Envelope"/></a>
      </p>
    </div>
  )
}