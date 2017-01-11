import React from 'react';
import { Link } from 'react-router';

import './header_styles.scss';

const Header = () => (
  <div>
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <img className='top-header-img' src='' alt='' />
          <img className='ripped ripped-header-img' src='' alt='' />
          <h1 className='header__title'>Place your content</h1>
          <Link to='search' className='header__link'>Search</Link>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
