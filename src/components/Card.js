import React from 'react';

function Card(props){

  switch(props.suit){
    case "spades":
      return (
        <div className="card ba b--black br2 pa1 black bg-white pointer">
          <div className="suit">
            &spades;{props.number.toUpperCase()}
          </div>
        </div>
      )

    case "clubs":
      return (
        <div className="card ba b--black br2 pa1 black bg-white pointer">
          <div className="suit">
            &clubs;{props.number.toUpperCase()}
          </div>
        </div>
      )

    case "hearts":
      return (
        <div className="card ba b--black br2 pa1 red bg-white pointer">
          <div className="suit">
            &hearts;{props.number.toUpperCase()}
          </div>
        </div>
      )

    case "diamonds":
      return (
        <div className="card ba b--black br2 pa1 red bg-white pointer">
          <div className="suit">
            &diams;{props.number.toUpperCase()}
          </div>
        </div>
      )
    default:
      return (
        <div className="card ba b--black br2 pa1 black pointer bg-white">
          &#63;
        </div>
      )
  }
}

export default Card;
