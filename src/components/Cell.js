import React, { Component } from 'react';

class Cell extends Component {
  render() {
    console.log('Cell - this.props is: ', this.props)
    return (
      <div className={(this.props.cellAlive === true) ? "green" : ""}>
        {this.props.cellId}: {this.props.cellAlive === true ? "ALIVE!" : "dead..."}
        <div>
          cellX={this.props.cellX}
        </div>
        <div>
          cellY={this.props.cellY}
        </div>
        <div>
          cellGeneration={this.props.cellGeneration}
        </div>
      </div>
    );
  }
}

export default Cell;
