import React from 'react';
import Card from './Card';
import { deck } from '../../Cards.js';
import { useState } from 'react';

const Board = () => {
  const [cards, setCards] = useState(deck);

  const cardSelected = (id) => {

    console.log(id)
    setCards(cards.map((card) => {
      if (card.id === id)
        return {...card, show:!card.show}
      else {return card}
    
    }))
  }
console.log(cards)
  return <div className="board">
    {cards.map((c) => <Card card={c} key={c.id} cardSelected={cardSelected} />)}

  </div>;
};

export default Board;
