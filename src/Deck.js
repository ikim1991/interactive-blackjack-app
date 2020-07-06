import Card from './Card';

class Deck{
  constructor(){
    this.deck = []
  }

  generateSixDecks(){
    for(let i = 0; i<6; i++){
      for(let suit of ['spades', 'clubs', 'hearts', 'diamonds']){
        for(let number of ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]){
          this.deck.push(new Card(suit, number))
        }
      }
    }
  }
}

export default Deck;
