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
          <div className="suit">
            &spades;{card.number}
          </div>
        </div>
      )

    case "clubs":
      return (
        <div className="card ba br2 pa1 black bg-white pointer">
          <div className="suit">
            &clubs;{card.number}
          </div>
        </div>
      )

    case "hearts":
      return (
        <div className="card ba br2 pa1 red bg-white pointer">
          <div className="suit">
            &hearts;{card.number}
          </div>
        </div>
      )

    case "diams":
      return (
        <div className="card ba br2 pa1 red bg-white pointer">
          <div className="suit">
            &diams;{card.number}
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
