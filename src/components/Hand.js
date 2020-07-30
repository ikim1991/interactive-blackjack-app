import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

function Hand(props){

  const { game, player, dealer } = props

  if(player){
    return(
      <div className="hand ba br3">
        {
          game.players[player].hand.map((card, ind) => <Card suit={card.suit} number={card.number} key={ind}/>)
        }
      </div>
    )
  } else if(dealer){
      if(game.dealer.hand.length === 1){
        return(
          <div className="hand ba br3">
            <Card suit={game.dealer.hand[0].suit} number={game.dealer.hand[0].number}/>
            <Card/>
          </div>
        )
      } else{
        return(
          <div className="hand ba br3">
            {
              game.dealer.hand.map((card, ind) => <Card suit={card.suit} number={card.number} key={ind}/>)
            }
          </div>
        )
      }
  }
  else{
    return(
      <div className="hand ba br3">
      </div>
    )
  }

}

export default connect(mapStateToProps)(Hand);
