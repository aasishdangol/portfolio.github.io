import React from 'react';
import NavBar from '../Components/NavBar';
import HeroImg2 from '../Components/HeroImg2';
import Footer from '../Components/Footer';
import PricingCard from '../Components/PricingCard';
import Work from '../Components/Work';
import TypeWritter from "typewriter-effect";



const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="PROJECTS."  text="Some of my most recent works " />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
