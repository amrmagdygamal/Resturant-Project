import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">I'm Amr Magdy Gamal I didn't see a good day in my life I will do anything to be able to be happy I wish I can help my family</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">I'm Amr Magdy Gamal I didn't see a good day in my life but I'm satisfied the only thing I want to do to help my family</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>

    </div>
    AboutUs
  </div>
);

export default AboutUs;
