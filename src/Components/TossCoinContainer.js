import React, { Component } from "react";
import "./TossCoinContainer.css";
import head from "../head.jpg"
import tail from "../tail.jpg"
import TossResult from "./TossResult";
import {choice} from "../helper"
import CoinImage from "./CoinImage";

export class TossCoinContainer extends Component {
    static defaultProps={
        coins:[{side:"head",imgSrc:head},{side:"tail",imgSrc:tail}]
    }
  constructor(props) {
    super(props);
    this.state = {
      currentCoin:null,
      flips: 0,
      head: 0,
      tail: 0,
    };
    this.handleFlip = this.handleFlip.bind(this);
  }
  handleFlip() {
    const newCoin=choice(this.props.coins);
     this.setState(st=>{
         return{
             currentCoin:newCoin,
             flips:st.flips+1,
             head:st.head+(newCoin.side==="head"?1:0),
             tail:st.tail+(newCoin.side==="tail"?1:0),
         }
     })


  }
  render() {
    const { flips,head,tail,currentCoin } = this.state;
    console.log("in render",currentCoin);
    return (
      <div className="TossCoinContainer">
        <h1>Lets flip a coin</h1>
        <div className="TossCoinContainer-image">
        { currentCoin && <CoinImage img={currentCoin}/>}
        </div>
        <div className="TossCoinContainer-btn">
           
          <button onClick={this.handleFlip}>Flip Me</button>
        </div>
        <TossResult flips={flips} head={head} tail={tail} />
      </div>
    );
  }
}

export default TossCoinContainer;
