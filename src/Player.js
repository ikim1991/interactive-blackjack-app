class Player{
  constructor(){
    this.user = {
      username: "",
      chips: 0,
      playerNumber: "",
      seated: false,
      turn: false
    };
    this.hand = [];
    this.count = 0;
    this.bet = 0;
    this.lucky = 0;
  }

  placeBet(value) {
    this.bet += value
  }

  placeLucky(value) {
    this.lucky += value
  }

  checkPlayerStatus(username){
    if(username === this.user.username){
      return true
    }
    return false
  }
}

module.exports = Player;
