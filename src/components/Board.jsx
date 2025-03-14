import React from 'react';

const Board = () => {
  return <div>
    {cards.map((c) => <Card card={c} key={id} />)}
  </div>;
};

export default Board;
