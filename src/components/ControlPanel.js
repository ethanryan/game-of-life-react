import React, { Component } from 'react';

class ControlPanel extends Component {
  render() {
    return (
      <div className="ControlPanel center-block">
        ControlPanel here!!!
        <p>
          Generation is: {this.props.generation}
        </p>
        <p>
          will add buttons and stuff later.
        </p>
      </div>
    );
  }
}

export default ControlPanel;
