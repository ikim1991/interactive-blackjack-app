class Card{
  constructor(suit, number){
    this.suit = suit;
    this.number = number.toLowerCase();
    if(this.number === 'j' || this.number === 'q' || this.number === 'k'){
      this.value = 10
    } else if(this.number === 'a'){
      this.value = 11
    } else{
      this.value = parseInt(number)
    }
  }
}

export default Card;
