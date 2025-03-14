import React from 'react';

const Card = ({ card, cardSelected }) => {
  return <div onClick={() => cardSelected(card.id)}>
    
    {card.name}
  <img src={card.show ? card.imageUrl : card.poster}/ >
  </div>;
};

export default Card;
