import React from 'react';
import DealerBox from './DealerBox';
import TableRules from '../components/TableRules';
import PlayerBox from './PlayerBox';

import { socket } from '../ClientSocket';
import { connect } from 'react-redux';
import { updateGameState } from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGameUpdate: (game) => {
      dispatch(updateGameState(game))
    }
  }
}

class Table extends React.Component{

  componentDidMount(){

    socket.on('loginState', (game) => {
      this.props.onGameUpdate(game)
    })

    socket.on('updateGame', (game) => {
      this.props.onGameUpdate(game)
    })
  }

  componentWillUnmount(){
    socket.emit('disconnect')
    socket.off('updateGame')
  }

  onSeatPlayer(user, player){
    socket.emit('seatPlayer', user, player)
  }

  render(){
    return (
      <div className="table bg-dark-green">
        <DealerBox/>
        <TableRules/>
        <div className="players">
          <div className="player-one">
            <PlayerBox seatPlayer={this.onSeatPlayer} player={"one"}/>
          </div>
          <div className="player-two">
            <PlayerBox seatPlayer={this.onSeatPlayer} player={"two"}/>
          </div>
          <div className="player-three">
            <PlayerBox seatPlayer={this.onSeatPlayer} player={"three"}/>
          </div>
          <div className="player-four">
            <PlayerBox seatPlayer={this.onSeatPlayer} player={"four"}/>
          </div>
          <div className="player-five">
            <PlayerBox seatPlayer={this.onSeatPlayer} player={"five"}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
