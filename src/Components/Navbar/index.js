import React from 'react';
import AirBnbLogo from '../../Logo/airBnb.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <img src={AirBnbLogo} alt='airbnb-logo' />
    </nav>
  );
};

export default Navbar;
