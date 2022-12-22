import React from 'react';
import "./FooterStyle.css";
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk,FaPhone, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <a href="https://www.google.com/maps/place/Khokana+Bus+Park/@27.6359219,85.2983357,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb17963566b139:0x5686b1fc6d201acf!8m2!3d27.6359172!4d85.3005244"><p>Khokana-21,Lalitpur</p></a>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
               <a href="tel:+977 984-9280496">9849280496</a> 
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
               <a href="mailto:gironspace7788@gmail.com">gironspace7788@gmail.com</a> 
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4 >About the company</h4>
                <p>This is me Aasish Dangol. 
                    I am frontend react developer in A.G.I InfoTech.</p>
                <div className='social'>
               <a href="https://www.facebook.com"> <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/> </a>
               <a href="https://www.instagram.com/"><FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/></a> 
                <a href="https://www.linkedin.com/"><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;