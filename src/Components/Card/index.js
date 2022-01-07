import React from 'react';
import starIcon from './icon/star.svg';
import './Card.css';

const Card = ({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) => {
  let badgeText;
  if (openSpots === 0) {
    badgeText = 'Sold Out';
  } else if (location === 'Online') {
    badgeText = 'Online';
  }
  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}

      <img
        className='card--image'
        src={`/static/media/${img}`}
        alt='activity-img'
      />
      <div className='card--info'>
        <div className='card--stats'>
          <img className='card--info--star' src={starIcon} alt='' />
          <span className='gray'>
            {rating} ({reviewCount}) •
          </span>
          <span className='gray'>{location}</span>
        </div>
        <p className='card--title'>{title}</p>
        <p className='card--price'>
          <span className='bold'>From ${price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
