import React from 'react';
import { Link } from 'react-router';

import './header_styles.scss';

import Slider from '../Slider/Slider';

const Header = () => (
  <div>
    <header className='header'>
      <h1 className='header__title'>The Jersey Jetsetter</h1>
      <div className='main-nav'>
        <div className='container'>
          <div className='row'>
            <Link to='about' className='main-nav-link'>About</Link>
            <Link to='blog' className='main-nav-link'>Blog</Link>
            <Link to='destinations' className='main-nav-link'>Destinations</Link>
            <Link to='shop' className='main-nav-link'>Shop</Link>
            <Link to='contact' className='main-nav-link'>Contact</Link>
          </div>
        </div>
      </div>
    </header>
    <Slider />
  </div>
);

export default Header;
