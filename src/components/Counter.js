import React from 'react';

function Counter(){

  const counter = {
    hand: 0,
    bet: 0,
    lucky: 0
  }

  return(
    <div className="counter ba br3">
      <div className="counter-item">
        <p>Your Hand</p>
        <p>{`${counter.hand}`}</p>
      </div>
      <div className="counter-item">
        <p>Bet Size</p>
        <p>{`${counter.bet}`}</p>
      </div>
      <div className="counter-item">
        <p>Lucky Lucky</p>
        <p>{`${counter.lucky}`}</p>
      </div>
    </div>
  )
}

export default Counter;
