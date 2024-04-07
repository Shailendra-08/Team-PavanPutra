
import React, { useState } from 'react';
import './About.css';
import arrow from '../../assets/arrow.png'

import poster from '../../assets/poster-1.jpg'

const About = () => {

  return (
    <div>
      <section id="about">
        <p className="section__text__p1">|| जय श्री राम ||</p>
        <h1 className="title">Mission</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={poster} alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="text-container">
              <p>
                मंदिर..आज के युवा मंदिर में जाना भूल गया है अपनी संस्कृति अपनी पैचन भूल गए हैं| महाप्रसाद के बहाने से लोग आते हैं...मंदिर मे चहल-पहल बढ़ती है बहुत बड़ी जीत होगी इस जीत के आप सभी भागीदार बनिए और अपनी संस्कृति के लिए आगे आकर समर्थन करें जय जय श्री राम 🚩
              </p>
            </div>
            
          </div>
        </div>
        <img src={arrow} alt="Arrow icon" className="icon arrow" onclick="location.href='./#experience'" />
      </section>
    </div>
  );
};

export default About;
