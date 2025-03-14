import React from 'react';

const Card = ({ card }) => {
  return <div>{card.name}
  <img src={card.imageUrl}/ >
  </div>;
};

export default Card;
