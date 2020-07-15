import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { socket } from '../ClientSocket';

const mapStateToProps = (state) => {
  return{
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

function Bets(props){

  const checkPlayerStatus = (playerNumber) => {
    return true
  }

  const dropBet = (event) => {
    const bet = parseInt(event.dataTransfer.getData("text"))
    console.log("Bet " + bet)
    socket.emit('placeBet', bet, "bet")
  }

  const dropLucky = (event) => {
    const lucky = parseInt(event.dataTransfer.getData("text"))
    console.log("Lucky Bet " + lucky)
    socket.emit('placeBet', lucky, "lucky")
  }

  const clearBet = () => {
    console.log("CLEAR BET")
  }

  const clearLucky = () => {
    console.log("CLEAR LUCKY")
  }

  return(
    ((props.user.seated && checkPlayerStatus(props.player)) && (props.game.phase === "betting" || props.game.phase === "waiting")) ? (
      <div className="bets">
        <div className="bet ba b--black br3 pointer" onDrop={dropBet} onDoubleClick={clearBet}>BET</div>
        <div className="lucky-lucky ba br-100 pointer" onDrop={dropLucky} onDoubleClick={clearLucky}>Lucky Lucky</div>
      </div>
    ) : (
      <div className="bets">
        <div className="bet ba b--black br3">BET</div>
        <div className="lucky-lucky ba br-100">Lucky Lucky</div>
      </div>
    )
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Bets);
