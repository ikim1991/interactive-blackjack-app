import React from 'react';

function Chips(){
  return (
    <div className="chips mb2">
      <div className="chip br-100 ba b--near-white bg-near-white black pointer" value="1">1</div>
      <div className="chip br-100 ba b--red bg-red black pointer" value="5">5</div>
      <div className="chip br-100 ba b--green bg-green black pointer" value="25">25</div>
      <div className="chip br-100 ba b--yellow bg-yellow black pointer" value="50">50</div>
      <div className="chip br-100 ba b--near-black bg-near-black white pointer" value="100">100</div>
    </div>
  )
}

export default Chips;
