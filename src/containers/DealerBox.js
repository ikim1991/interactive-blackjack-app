import React from 'react';
import Dealer from '../components/Dealer';
import Hand from '../components/Hand';
import DealerCount from '../components/DealerCount';


class DealerBox extends React.Component{
  render(){
    return(
      <div className="dealer-box">
        <Dealer/>
        <Hand/>
        <DealerCount/>
      </div>
    )
  }
}

export default DealerBox;
