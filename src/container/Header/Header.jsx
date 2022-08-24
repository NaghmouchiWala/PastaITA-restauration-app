import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chassez La Nouvelle Saveur" />
      <h1 className="app__header-h1">Best Pasta à La Marsa </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Ce restaurant se spécialise dans la préparation de plats de pasta uniquement. Situé à La Marsa, nous offrons une livraison partout dans le bon lieu. </p>
     <a href="#menu">
      <button type="button" className="custom__button">Explorer Le Menu</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div> 
  </div>
);

export default Header;
