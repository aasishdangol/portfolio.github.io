import React from 'react';
import "./AboutContentStyle.css";
import { Link } from 'react-router-dom';
import Display from'../assets/GOVN8091.webp';
import Display2 from '../assets/GOVN8100.webp'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
        <h1>Who Am I?</h1>
        <p>Im a react front-end developer. I create 
            responsive secure websites for my cilents.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={Display} className="img" alt="true" />
            </div>
            <div className='img-stack bottom'>
                <img src={Display2} className="img" alt="true" />
            </div>
        </div>
        </div>
    </div>
  );
};

export default AboutContent;