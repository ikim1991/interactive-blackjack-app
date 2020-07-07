const Card = require('./Card');

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

  shuffleDeck(){
    this.deck = []
    this.generateSixDecks()
    console.log(this.deck)
    for(let i = 0; i<this.deck.length; i++){
      let random = Math.floor(Math.random() * (this.deck.length - 1))
      let tmp = this.deck[i]
      this.deck[i] = this.deck[random]
      this.deck[random] = tmp
    }
    console.log(this.deck)
  }
}

export default Card;
