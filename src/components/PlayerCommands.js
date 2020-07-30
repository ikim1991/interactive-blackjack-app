import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../ClientSocket';

const mapStateToProps = (state) => {
  return{
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

function PlayerCommands(props){

  const onExit = (event) => {
    event.target.setAttribute("disabled", "disabled")
    const element = event.target
    socket.emit('unseat', props.user, (seated) => {
      if(seated){
        element.removeAttribute("disabled")
      }
    })
  }
  const onHit = (event) => {
    event.target.setAttribute("disabled", "disabled")
    const element = event.target
    socket.emit('hit', props.user, (seated) => {
      if(seated){
        element.removeAttribute("disabled")
      }
    })
  }

  const onStay = (event) => {
    event.target.setAttribute("disabled", "disabled")
    const element = event.target
    socket.emit('stay', props.user, (seated) => {
      if(seated){
        element.removeAttribute("disabled")
      }
    })
  }
  const onDouble = (event) => {
    event.target.setAttribute("disabled", "disabled")
    const element = event.target
    socket.emit('double', props.user, (seated) => {
      if(seated){
        element.removeAttribute("disabled")
      }
    })
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
  } else if((props.game.players[props.player].user.turn && props.game.players[props.player].hand.length > 2) && (props.user.seated && props.user.playerNumber === props.player)){
    return(
      <div className="player-commands mb2">
        <button className="hit ba br2 pointer" type="button" onClick={onHit}>Hit</button>
        <button className="stay ba br2 pointer" type="button" onClick={onStay}>Stay</button>
        <button className="double ba br2 pointer" type="button" onClick={onDouble} disabled>Double</button>
        <button className="exit ba br2 pointer" type="button" disabled>Exit</button>
      </div>
    )
  } else if((props.game.players[props.player].user.turn && props.game.players[props.player].hand.length === 2) && (props.user.seated && props.user.playerNumber === props.player)){
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

export default connect(mapStateToProps)(PlayerCommands)
