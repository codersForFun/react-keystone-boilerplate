import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div>
    <header>
      <div className="container">
        <div className="row">
          <img className="top-header-img" src="" alt="" />
          <img className="ripped ripped-header-img" src="" alt="" />
          <h1>Place your content here</h1>
          <Link to="/about">About</Link>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
