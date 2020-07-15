import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

function UserInfo(props){
  const { user, player, game, seatPlayer } = props
  return(
    (!game.players[player].user.seated) ? (
      <div className="user-info empty ba br4 pointer f-headline-l" value={player} onClick={() => seatPlayer(user, player)}>
        +
      </div>
    ) : (
      <div className="user-info ba br4" value={player}>
        <div className="user-chips w-100 mt3">{`CHIPS - $${game.players[player].user.chips}`}</div>
        <div className="user w-100 mt3">{`${game.players[player].user.username}`}</div>
        <img className="user-dp" src={`https://robohash.org/${game.players[player].user.username}`} alt="user"/>
      </div>
    )
  )
}

export default connect(mapStateToProps)(UserInfo);
