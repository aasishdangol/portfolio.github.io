import React from 'react'
import IntroImg from"../assets/h4.jpg";
import "./HeroImgStyle.css";
import TypeWritter from "typewriter-effect";
import {Link} from"react-router-dom";

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img 
           className='into-img' src={IntroImg} alt="" />
        </div>
        <div className='content'>
            <p>
              <TypeWritter
              options={{
                autoStart:true,
                loop:true,
                delay:60,
                strings:[
                  "HI, I'M A FREELANCER."
                ]
              }}
              />
            </p>

            <h1>React Developer.</h1>
            <div>
               <Link to="/project" className='btn'>Project</Link>
               <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg;