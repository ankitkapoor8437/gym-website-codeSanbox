import React from 'react'
// import '../App.css'
import Hero from '../components/hero-section/hero';
import Programs from '../components/programs-section/programs';
import Reasons from '../components/reasons-section/reasons';
import Plans from '../components/plans-section/plans';
import Testimonial from '../components/testimonial-section/testimonial';

const Home = () => {
  return (
    <div >
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testimonial/>
    </div>
  )
}

export default Home;