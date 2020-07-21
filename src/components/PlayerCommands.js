import React from 'react';
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

function PlayerCommands(props){

  const onExit = () => {
    socket.emit('unseat', props.user)
  }
  const onHit = () => {
    socket.emit('hit', props.user)
  }
  const onStay = () => {
    socket.emit('stay', props.user)
  }
  const onDouble = () => {
    socket.emit('double', props.user)
  }

  if((props.game.phase === "betting" || props.game.phase === "waiting") && (props.user.seated && props.user.playerNumber === props.player)){
    return(
      <div className="player-commands mb2">
        <button className="hit ba br2 pointer" type="button" disabled>Hit</button>
        <button className="stay ba br2 pointer" type="button" disabled>Stay</button>
        <button className="double ba br2 pointer" type="button" disabled>Double</button>
        <button className="exit ba br2 pointer" type="button" onClick={onExit}>Exit</button>
      </div>
    )
  } else if((props.game.players[props.player].user.turn) && (props.user.seated && props.user.playerNumber === props.player)){
    return(
      <div className="player-commands mb2">
        <button className="hit ba br2 pointer" type="button" onClick={onHit}>Hit</button>
        <button className="stay ba br2 pointer" type="button" onClick={onStay}>Stay</button>
        <button className="double ba br2 pointer" type="button" onClick={onDouble}>Double</button>
        <button className="exit ba br2 pointer" type="button" disabled>Exit</button>
      </div>
    )
  } else{
    return(
      <div className="player-commands mb2">
        <button className="hit ba br2 pointer" type="button" disabled>Hit</button>
        <button className="stay ba br2 pointer" type="button" disabled>Stay</button>
        <button className="double ba br2 pointer" type="button" disabled>Double</button>
        <button className="exit ba br2 pointer" type="button" disabled>Exit</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCommands)
