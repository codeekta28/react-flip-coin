import React, { Component } from 'react'

export class CoinImage extends Component {
  render() {
      const{img}=this.props
    
    return (
      <div className='CoinImage'>
          <img src={img.imgSrc} alt={img.side} />
      </div>
    )
  }
}

export default CoinImage