import React from 'react';
import AirBnbLogo from '../../Logo/airBnb.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <img className='nav--logo' src={AirBnbLogo} alt='airbnb-logo' />
    </nav>
  );
};

export default Navbar;
