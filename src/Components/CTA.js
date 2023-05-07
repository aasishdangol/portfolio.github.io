import React from 'react';
import CV from '../assets/Aasish_Dangol.pdf';
import "./CTAStyle.css"
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} dowload className='btn'>Download CV</a>
    <a href="/contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
