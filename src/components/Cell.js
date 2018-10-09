import React, { Component } from 'react';

class Cell extends Component {
  render() {
    // console.log('Cell - this.props is: ', this.props)
    return (
      <div className={(this.props.cellAlive === true) ? "green" : "black"}>
        {this.props.cellAlive === true ? "😀" : "☠️"}
      </div>
    );
  }
}

export default Cell;
