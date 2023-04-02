import React from 'react';
import '../hero-section/hero.css'
import Header from '../header/header';
import heroImage from '../../assets/hero_image.png'
import heroImageBack from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="leftHero">
        <Header />

        <div className="best-add">
          <div></div>
          <span>The best fitness club in the town.</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>


          <div className="span">
            In here we will help you to shape and build your ideal body and live up your life to fullest.
          </div>
        </div>


        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>


        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn">
            Get Started
          </button>
          <button className="btn">
            Learn More
          </button>
        </div>

      </div>



      <div className="rightHero">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="heartImage" />
          <span>Heart Rate </span>
          <span>116 BPM</span>
        </div>

        {/* image sectoin */}
        <img src={heroImage} className="heroImage" />
        <img src={heroImageBack} className="heroImageBack" />

        {/* calories */}
        <div className="calories">
          <img src={Calories}  />
          <div>
            <span>Calories Burned</span><span>220 kcal</span>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Hero;