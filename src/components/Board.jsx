import React from 'react';
import Card from './Card';

const Board = () => {
  return (
    <div className="board">
      <Card name={'Gandalf'} />
      <Card name={'Gimli'} />
      <Card name={'Golum'} />
      <Card name={'Glok'} />
    </div>
  );
};

export default Board;
