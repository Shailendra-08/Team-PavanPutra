import React from 'react'
import './Hero.css'

import hunmanji from '../../assets/hunmanji_figma.png'

import { Link } from 'react-router-dom'




const Hero = () => {

  return (
    <div>

      <section id="profile">
        <div className="section__pic-container">
          <img src={hunmanji} alt="Hunmanji profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">|| जय श्री राम ||</p>
          <h1 className="title"> मिशन पवनपुत्र</h1>
          <p className="section__text__p2">हर महीने का पहला मंगलवार</p>
          <p className="section__text__p2">अपनी संस्कृति को बचाने के लिए एक कदम आगे बधाई 🚩</p>

          <div className="btn-container">
          <Link to={"/donation"}>
            <button className="btn btn-color-2" onclick={'/donation'}>
            Donation
            </button>
            </Link>

            {/* <Link to={"/contact"}>
            <button className="btn btn-color-2">
              Contact Info
            </button> */}


            {/* </Link> */}

            
          </div>
          
        </div>
      </section>

    </div>
  )
}

export default Hero
