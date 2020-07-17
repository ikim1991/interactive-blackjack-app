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

  if((props.game.phase === "betting" || props.game.phase === "waiting") && (props.user.seated && props.user.playerNumber === props.player)){
    return(
      <div className="player-commands mb2">
        <button className="hit ba br2 pointer" type="button" disabled>Hit</button>
        <button className="stay ba br2 pointer" type="button" disabled>Stay</button>
        <button className="double ba br2 pointer" type="button" disabled>Double</button>
        <button className="exit ba br2 pointer" type="button" onClick={onExit}>Exit</button>
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
