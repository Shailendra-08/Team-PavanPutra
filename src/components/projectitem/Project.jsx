// 
import React, { useState } from 'react';
import './Project.css';

import arrow from '../../assets/arrow.png';
import video1 from '../../video/video-1.mp4'
import video3 from '../../video/video-3.mp4'
import { DefaultPlayer as videoplayer } from 'react-html5video'
import 'react-html5video/dist/index'


const Project = () => {

  const [model, setmodel] = useState(false);


  let data = [
    {
      id: 1,
      video: video3,
      Text: "Team: PawanPutra Maha Arti" 
    },
    {
      id: 2,
      video: video1,
      Text: "Team: PawanPutra Maha-Prashad" 

    }
  ]


  return (

    <div>
      <section id="projects">
        <p className="section__text__p1">|| जय श्री राम ||</p>
        <h1 className="title">Our Work</h1>

        <div className="gallery">
          {

            data.map((item, index) => {
              return (
                <div className='video' key={index}>

                  <div className="video-container">
                    <video
                      style={{ width: '100%' }}
                      
                      controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    >
                    
                      <source src={item.video} type="video/webm" />

                    </video>
                    <h3>{item.Text}</h3>

                  </div>
                </div>

              )
            })

          }

        </div>

        <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#contact'} />
      </section>
    </div>
  );
}

export default Project;
