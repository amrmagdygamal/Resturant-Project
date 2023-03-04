import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+201095330155</p>
        <p className="p__opensans">+201095330155</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">The Best Way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/profile.php?id=100035881681593&mibextid=ZbWKwL" target='_blank'><FiFacebook /></a>
          <a href="https://twitter.com/AkerAmror"><FiTwitter /></a>
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am -11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Amror. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
