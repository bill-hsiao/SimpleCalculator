import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
      <div>{this.props.val}</div>
      </div>

    );
  }
}

export default Display;
