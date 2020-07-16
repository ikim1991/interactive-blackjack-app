import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    game: state.gameState.game,
    user: state.userLogIn.user
  }
}


function Counter(props){

  return(
    <div className="counter ba br3">
      <div className="counter-item">
        <p>Your Hand</p>
        <p>{`${props.game.players[props.player].count}`}</p>
      </div>
      <div className="counter-item">
        <p>Bet Size</p>
        <p>{`${props.game.players[props.player].bet}`}</p>
      </div>
      <div className="counter-item">
        <p>Lucky Lucky</p>
        <p>{`${props.game.players[props.player].lucky}`}</p>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Counter);
