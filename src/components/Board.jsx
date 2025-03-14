import React, { useEffect } from 'react';
import Card from './Card';
import { deck } from '../../Cards.js';
import { useState } from 'react';

const Board = () => {
  const [cards, setCards] = useState(deck);
  const [correctCards, setCorrectCards] = useState([]);

  const cardSelected = (id) => {
    console.log(id)
    setCards(cards.map((card) => {
      if (card.id === id)
        return {...card, show:!card.show}
      else {return card}
    }))
  }

  const pair = (name) => {
    setCards(cards.map((card) => {
      if (card.name === name)
        return {...card, show:!card.show}
      else {return card}
    
    }))

  }

console.log(cards)

useEffect(() => {
  const turnedCards = cards.filter((c) => c.show);
  if(turnedCards.length > 0 && turnedCards.length % 2 === 0) {
    
      if(turnedCards[0].name === turnedCards[1].name) {
        setCorrectCards(turnedCards);
      }
      else {
        setTimeout(() => {
          setCards(cards.map((c) => {
            let foundCardInCorrectList = false;
            correctCards.forEach((cc) => {
              if(c.id === cc.id) {
                foundCardInCorrectList = true;
              } 
            })

            console.log("Found cc", c,foundCardInCorrectList)
            if(!foundCardInCorrectList) return {...c, show: false}
            return c;
          }));
        }, 1500)
      }
    
  }
}, [cards]);

// localStorage.setItem("cards", JSON.stringify(cards))
console.log('====================================');
console.log(correctCards);
console.log('====================================');

  return <div className="board">
    
    {cards.map((c) => <Card card={c} key={c.id} cardSelected={cardSelected} pair={pair} />)}

  </div>;
};



export default Board;
