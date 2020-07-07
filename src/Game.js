import Player from './Player';

class Game{
  constructor(){
    this.game = {
      phase: {
        waiting: true,
        betting: false,
        firstDeal: false,
        secondDeal: false,
        playerOne: false,
        playerTwo: false,
        playerThree: false,
        playerFour: false,
        playerFive: false,
        dealersTurn: false,
        results: false,
        distribution: false
      },
      dealer: {
        hand: [],
        firstCard: [],
        count: 0
      },
      players: {
        one: new Player(),
        two: new Player(),
        three: new Player(),
        four: new Player(),
        five: new Player()
      },
      deck: []
    }
  }
}

export default Game;
