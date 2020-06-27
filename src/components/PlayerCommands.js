import React from 'react';

function PlayerCommands(){

  // betting -> waiting -> first-round -> second-round
  const status = "waiting"

  switch(status){
    case "betting":
      return(
        <div className="player-commands">
          <button className="hit ba br2 pointer" type="button" disabled>Hit</button>
          <button className="stay ba br2 pointer" type="button" disabled>Stay</button>
          <button className="double ba br2 pointer" type="button" disabled>Double</button>
          <button className="exit ba br2 pointer" type="button">Exit</button>
        </div>
      )
    case "waiting":
      return(
        <div className="player-commands">
          <button className="hit ba br2 pointer" type="button" disabled>Hit</button>
          <button className="stay ba br2 pointer" type="button" disabled>Stay</button>
          <button className="double ba br2 pointer" type="button" disabled>Double</button>
          <button className="exit ba br2 pointer" type="button" disabled>Exit</button>
        </div>
      )

    case "first-round":
      return(
        <div className="player-commands">
          <button className="hit ba br2 pointer" type="button">Hit</button>
          <button className="stay ba br2 pointer" type="button">Stay</button>
          <button className="double ba br2 pointer" type="button">Double</button>
          <button className="exit ba br2 pointer" type="button" disabled>Exit</button>
        </div>
      )

    case "second-round":
      return(
        <div className="player-commands">
          <button className="hit ba br2 pointer" type="button">Hit</button>
          <button className="stay ba br2 pointer" type="button">Stay</button>
          <button className="double ba br2 pointer" type="button" disabled>Double</button>
          <button className="exit ba br2 pointer" type="button" disabled>Exit</button>
        </div>
      )

    default:
      return(
        <div className="player-commands">
          <button className="hit ba br2 pointer" type="button" disabled>Hit</button>
          <button className="stay ba br2 pointer" type="button" disabled>Stay</button>
          <button className="double ba br2 pointer" type="button" disabled>Double</button>
          <button className="exit ba br2 pointer" type="button" disabled>Exit</button>
        </div>
      )
  }
}

export default PlayerCommands
