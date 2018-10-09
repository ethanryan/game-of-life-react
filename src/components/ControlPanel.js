import React, { Component } from 'react';

class ControlPanel extends Component {
  render() {
    return (
      <div className="ControlPanel center-block box-shadow">
        <p className="center-text">
          Generation: {this.props.generation}
        </p>
      </div>
    );
  }
}

export default ControlPanel;
