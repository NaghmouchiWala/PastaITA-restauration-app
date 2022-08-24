import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">S'abonner à notre newsletter</h1>
      <p className="p__opensans">Et ne manquez jamais les dernières mises à jour !</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">S'abonner</button>
    </div>
  </div>
);

export default Newsletter;
