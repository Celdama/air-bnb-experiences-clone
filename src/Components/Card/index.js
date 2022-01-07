import React from 'react';
import swimmingImg from './img/swimming.png';
import starIcon from './icon/star.svg';
import './Card.css';

const Card = () => {
  return (
    <div className='card'>
      <img className='card--image' src={swimmingImg} alt='swimming-img' />
      <div className='card--info'>
        <div className='card--stats'>
          <img className='card--info--star' src={starIcon} alt='' />
          <span className='gray'>5.0 (6) - </span>
          <span className='gray'>USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className='bold'>From $136</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
