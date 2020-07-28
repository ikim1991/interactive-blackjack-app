import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    user: state.userLogIn.user,
    game: state.gameState.game
  }
}

function DealerCount(props){

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
    <div className="dealer-count center">
      <div className="ba br3">
      {
        (props.game.dealer.hand.map(card =>card.number).includes('a')) ?
        (<p>{`Dealer Has: ${checkForAce(props.game.dealer.hand, props.game.dealer.count)}`}</p>) :
        (<p>{`Dealer Has: ${props.game.dealer.count}`}</p>)
      }
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(DealerCount);
