import React from 'react';

const Card = ({ card, cardSelected }) => {
  return <div className="card" onClick={() => cardSelected(card.id)}>
    
  <img src={card.show ? card.imageUrl : card.poster}/ >
  </div>;
};

export default Card;
