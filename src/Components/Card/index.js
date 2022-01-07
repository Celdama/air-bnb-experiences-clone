import React from 'react';
import starIcon from './icon/star.svg';
import './Card.css';

const Card = ({ img, rating, reviewCount, location, title, price }) => {
  return (
    <div className='card'>
      <img
        className='card--image'
        src={`/static/media/${img}`}
        alt='swimming-img'
      />
      <div className='card--info'>
        <div className='card--stats'>
          <img className='card--info--star' src={starIcon} alt='' />
          <span className='gray'>
            {rating} ({reviewCount}) •
          </span>
          <span className='gray'>{location}</span>
        </div>
        <p>{title}</p>
        <p>
          <span className='bold'>From ${price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
