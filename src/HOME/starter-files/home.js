import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';

function Homepage() {

  // home-page

  return(
  <React.Fragment>

    <div className='website-container'>
      <nav className='main-nav'>
        <div className='companyLogo'>
        </div>
        <ul>
          <li>HOME</li>
          <li>LOG-IN</li>
          <li>ABOUT</li>
        </ul>
      </nav>

      <div className='image-slider'></div>
      <div className='profile-section'></div>
      <footer></footer>

    </div>
  </React.Fragment>  
  )
}

export default Homepage;
