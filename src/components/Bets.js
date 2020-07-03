import React from 'react';

function Bets(){

  const dropBet = (event) => {
    const data = parseInt(event.dataTransfer.getData("text"))
    console.log("BET", data)
  }

  const dropLucky = (event) => {
    const data = parseInt(event.dataTransfer.getData("text"))
    console.log("LUCKY", data)
  }

  const clearBet = () => {
    console.log("CLEAR BET")
  }

  const clearLucky = () => {
    console.log("CLEAR LUCKY")
  }

  return(
    <div className="bets">
      <div className="bet ba b--black br3 pointer" onDrop={dropBet} onDoubleClick={clearBet}>BET</div>
      <div className="lucky-lucky ba br-100 pointer" onDrop={dropLucky} onDoubleClick={clearLucky}>Lucky Lucky</div>
    </div>
  )
}

export default Bets;
