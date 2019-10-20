import React, { Component } from 'react';

export class VendorList extends Component {
  render() {
    return (
      <div class="container">
      <p>A type of neural network which uses overlapping input neurons modeled
      on the behavior of human visual cortex. Convolutional neural networks are
      best known for their use in image analysis, specifically object recognition.</p>
      <p>{String(this.props.lastUpdated)}</p>
      </div>
    )
  }
}
