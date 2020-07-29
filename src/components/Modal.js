import React from 'react';

function Modal(){

  const closeModal = (e) => {
    e.target.parentElement.style.visibility = "hidden"
  }

  return(
      <div className="modal ba br3" id="modal">
        <div className="modal-exit white f4 pointer" onClick={closeModal}>X</div>
        <div className="modal-header near-white tc">
          <h1>Six-Deck BlackJack Game Rules</h1>
        </div>
        <div className="modal-body near-white indent-l f4">
          <p>1. To place your bets, drag the desired amount of chips into the BET and/or Lucky Lucky Box. To retract bets, double click on the Box.</p>
          <p>2. The game will initiate when a bet is placed by any of the players. A timer is started indicating the length of time until the cards will be dealt</p>
          <p>3. Once the timer hits 0, the cards will be dealt</p>
          <p>4. After 2 seconds, the dealer will check for Lucky Lucky winners and distribute the winnings</p>
          <p>5. Starting from right to left, the players will rotate turns given the options to, Hit, Stay, or Double Down</p>
          <p>6. Aces acts as either 1 or 11 and will always take the higher value without exceeding 21</p>
          <p>7. On the dealer's turn, the dealer will reveal its facedown card. The dealer must hit until 17 and stand on 17</p>
          <p>8. When dealer stands or busts, the winnings will be distributed shortly after</p>
          <p>9. BlackJack pays 3-to-2 and BlackJack pays even money when the dealer also shows a BlackJack</p>
          <p>10. After roughly half the the deck has been played out, the dealer will automatically shuffle check</p>
          <p>11. When all the seats are vacant, the game state resets</p>
        </div>
        <div className="lucky-payout near-white indent-l f4">
          <h2>Lucky Lucky Payouts</h2>
          <p>Suited 777: 200-to-1</p>
          <p>Suited 678: 100-to-1</p>
          <p>777: 50-to-1</p>
          <p>678: 30-to-1</p>
          <p>Suited 21: 15-to-1</p>
          <p>21 Total: 3-to-1</p>
          <p>20 Total: 2-to-1</p>
          <p>19 Total: 2-to-1</p>
        </div>
      </div>
    )
}

export default Modal;
