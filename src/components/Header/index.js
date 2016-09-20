import React from 'react';
import { Link } from 'react-router';

import './style.scss';

const Header = () => (
  <div>
    <header>
      <div className="container">
        <div className="row">
          <img className="top-header-img" src="" alt="" />
          <img className="ripped ripped-header-img" src="" alt="" />
          <h1>Place your content</h1>
          <Link to="search">Search</Link>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
