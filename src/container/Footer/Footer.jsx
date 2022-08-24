import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-nous</h1>
        <p className="p__opensans">okletayemzmen@gmail.com</p>
        <p className="p__opensans">+216 92-753-909</p>
        <p className="p__opensans">+216 90-429-500</p>
        
       
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;La meilleure façon de se trouver est de se perdre au service des autres.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Heures de travail</h1>
        <p className="p__opensans">Lundi-Vendredi:</p>
        <p className="p__opensans">09:00 am - 02:00 am</p>
        <p className="p__opensans">Samedi-Dimanche:</p>
        <p className="p__opensans">10:00 am - 03:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Pasta ITA. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;