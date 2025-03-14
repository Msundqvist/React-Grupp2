import React from 'react';
import Card from './Card';
import { cards } from '../../Cards.js';

const Board = () => {
  return <div>
    {cards.map((c) => <Card card={c} key={id} />)}
  </div>;
};

export default Board;
