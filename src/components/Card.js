import React from 'react';

function Card(){

  const card = {
    suit: "spades",
    number: "A",
    value: 11
  }

  switch(card.suit){
    case "spades":
      return (
        <div className="card ba br2 pa1 black bg-white pointer">
          <div className="suit f3">
            &spades;
          </div>
          <div className="number f3">
            {card.number}
          </div>
          <div className="suit-bottom f3">
            &spades;
          </div>
        </div>
      )

    case "clubs":
      return (
        <div className="card ba br2 pa1 black bg-white pointer">
          <div className="suit f3">
            &clubs;
          </div>
          <div className="number f3">
            {card.number}
          </div>
          <div className="suit-bottom f3">
            &clubs;
          </div>
        </div>
      )

    case "hearts":
      return (
        <div className="card ba br2 pa1 red bg-white pointer">
          <div className="suit f3">
            &hearts;
          </div>
          <div className="number f3">
            {card.number}
          </div>
          <div className="suit-bottom f3">
            &hearts;
          </div>
        </div>
      )

    case "diams":
      return (
        <div className="card ba br2 pa1 red bg-white pointer">
          <div className="suit f3">
            &diams;
          </div>
          <div className="number f3">
            {card.number}
          </div>
          <div className="suit-bottom f3">
            &diams;
          </div>
        </div>
      )
    default:
      return (
        <div className="card ba br2 pa1 black bg-near-black pointer">
        </div>
      )
  }
}

export default Card;
