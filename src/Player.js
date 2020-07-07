class Player{
  constructor(){
    this.user = {
      username: "",
      chips: 0
    };
    this.seated = false;
    this.turn = false;
    this.seated = false;
    this.turn = false;
    this.hand = [];
    this.count = 0;
    this.bet = 0;
    this.lucky = 0;
  }

  seatPlayer(user) {
    this.user.username = user.username
    this.user.chips = user.chips
    this.seated = true
  }

  placeBet(value) {
    this.bet += value
  }

  placeLucky(value) {
    this.lucky += value
  }
}

module.exports = Player;
