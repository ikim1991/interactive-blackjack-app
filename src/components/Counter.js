import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    game: state.gameState.game,
    user: state.userLogIn.user
  }
}


function Counter(props){

  const checkForAce = (hand, count) =>{
    let numOfAces = 0
    for(let i = 0; i<hand.length; i++){
      if(hand[i].number === 'a'){
        numOfAces++
      }
    }

    if(numOfAces > 0){
      if(count === 11 && hand.length === 1){
        return `${count}`
      } else {
        return `${count}`
      }
    } else{
      return `${count}`
    }
  }

  return(
    <div className="counter ba br3">
      <div className="counter-item">
        <p>Your Hand</p>
        {
          (props.game.players[props.player].hand.map(card =>card.number).includes('a')) ?
          (<p>{checkForAce(props.game.players[props.player].hand, props.game.players[props.player].count)}</p>) :
          (<p>{`${props.game.players[props.player].count}`}</p>)
        }
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
