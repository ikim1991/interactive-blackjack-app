import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../ClientSocket';

const mapStateToProps = (state) => {
  return{
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

function Bets(props){

  const dragEnter = (event) => event.preventDefault()
  const dragLeave = (event) => event.preventDefault()
  const dragOver = (event) => event.preventDefault()

  const dropBet = (event) => {
    event.preventDefault()
    const bet = parseInt(event.dataTransfer.getData("text"))
    socket.emit('placeBet', bet, "bet", props.user)
  }

  const dropLucky = (event) => {
    event.preventDefault()
    const lucky = parseInt(event.dataTransfer.getData("text"))
    socket.emit('placeBet', lucky, "lucky", props.user)
  }

  const clearBet = () => {
    if(props.game.players[props.player].bet > 0){
      socket.emit('clearBet', "bet", props.user)
    }
  }

  const clearLucky = () => {
    if(props.game.players[props.player].lucky > 0){
      socket.emit('clearBet', "lucky", props.user)
    }
  }

  return(
    ((props.user.seated && props.user.playerNumber === props.player) && (props.game.phase === "betting" || props.game.phase === "waiting")) ? (
      <div className="bets">
        <div className="bet ba b--black br3 pointer" onDrop={dropBet} onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={dragOver} onDoubleClick={clearBet}>BET</div>
        <div className="lucky-lucky ba br-100 pointer" onDrop={dropLucky} onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={dragOver} onDoubleClick={clearLucky}>Lucky Lucky</div>
      </div>
    ) : (
      <div className="bets">
        <div className="bet ba b--black br3">BET</div>
        <div className="lucky-lucky ba br-100">Lucky Lucky</div>
      </div>
    )
  )
}

export default connect(mapStateToProps)(Bets);
