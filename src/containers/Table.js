import React from 'react';
import DealerBox from './DealerBox';
import TableRules from '../components/TableRules';
import PlayerBox from './PlayerBox';

import { socket } from '../ClientSocket';
import { connect } from 'react-redux';
import { updateGameState, updateUser } from '../actions';

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
    },
    onUserUpdate: (user) => {
      dispatch(updateUser(user))
    }
  }
}

const countDown = (i, user, players) => {
    let int = setInterval(function () {
        socket.emit('countdown', i, user)
        i-- || clearInterval(int);
        socket.on('stopCountdown', () =>{
          clearInterval(int)
        })
    }, 1000)};

class Table extends React.Component{

  componentDidMount(){
    socket.on('loginState', (game) => {
      this.props.onGameUpdate(game)
    })

    socket.on('updateGame', (game) => {
      this.props.onGameUpdate(game)
    })

    socket.on('updateUser', (user) => {
      this.props.onUserUpdate(user)
    })

    socket.on('initiatePhase', (game) => {
      this.props.onGameUpdate(game)
      if(this.props.game.phase === "betting"){
        countDown(3, this.props.user)
      }
    })

    window.addEventListener('beforeunload', (event) => {
      event.preventDefault()
      socket.emit('logout', this.props.user)
    })
  }

  componentWillUnmount(){
    socket.emit('disconnect')
    socket.off('logout')
    socket.off('updateGame')
  }

  onSeatPlayer(user, player){
    socket.emit('seatPlayer', user, player)
  }

  render(){
    return (
      <div className="table bg-dark-green">
        <DealerBox dealer={"dealer"}/>
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
