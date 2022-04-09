import React, { Component } from 'react'

export class TossResult extends Component {
  render() {
      const{flips,head,tail}=this.props
    return (
      <div className='TossResult'>
          <p>Out of {flips} flips there are {head} heads and {tail} tails</p>
      </div>
    )
  }
}

export default TossResult