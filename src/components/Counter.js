import React from 'react';

function Counter(){

  const counter = {
    hand: 0,
    bet: 0,
    lucky: 0
  }

  return(
    <div className="counter ba br3">
      <p>{`Your Hand: ${counter.hand}`}</p>
      <p>{`Bet Size: ${counter.bet}`}</p>
      <p>{`Lucky-Lucky: ${counter.lucky}`}</p>
    </div>
  )
}

export default Counter;
