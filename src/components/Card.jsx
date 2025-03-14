import React from 'react';

const Card = ({ card, cardSelected, pair }) => {
  return <div className="card" onClick={() => cardSelected(card.id, pair(card.name))} >
    
  <img src={card.show ? card.imageUrl : card.poster}/ >
  </div>;
};

export default Card;
