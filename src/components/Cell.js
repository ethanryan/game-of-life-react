import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <div className={(this.props.cellAlive === true) ? "green" : ""}>
        {this.props.cellId}: {this.props.cellAlive === true ? "ALIVE!" : "dead..."}
      </div>
    );
  }
}

export default Cell;
