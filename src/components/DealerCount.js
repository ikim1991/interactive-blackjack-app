import React from 'react';

function DealerCount(){

  const counter = {
    hand: 11
  }

  return(
    <div className="dealer-count">
      <div className="ba br3">
        <p>{`Dealer Has: ${counter.hand}`}</p>
      </div>
    </div>
  )
}

export default DealerCount;
