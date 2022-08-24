import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
   
    <div className="app__wrapper_info">
      <SubHeading title="Le mot du chef" />
      <h1 className="headtext__cormorant">Ce en quoi nous croyons</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Nous considérons que chaque repas doit être préparé avec beaucoup d'amour et de passion.</p>
        </div>
        <p className="p__opensans"> Mon enthousiasme pour ce travail m'a donné la possibilité de préparer des plats de pâtes étonnants. </p>
      </div>

      <div className="app__chef-sign">
        <p>Houssine</p>
        <p className="p__opensans">Chef & Fondateur</p>
      
      </div>
    </div>
  </div>
);

export default Chef;
