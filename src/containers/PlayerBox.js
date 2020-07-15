import React from 'react';
import Counter from '../components/Counter';
import Hand from '../components/Hand';
import Bets from '../components/Bets';
import Chips from '../components/Chips';
import PlayerCommands from '../components/PlayerCommands';
import UserInfo from '../components/UserInfo';

class PlayerBox extends React.Component{
  render(){
    return(
      <div className="player-box">
        <Counter/>
        <Hand/>
        <Bets player={this.props.player}/>
        <Chips player={this.props.player}/>
        <PlayerCommands/>
        <UserInfo seatPlayer = {this.props.seatPlayer} player={this.props.player}/>
      </div>
    )
  }
}

export default PlayerBox
