import React from 'react';
import $ from 'jquery';

class Quest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <option value={this.props.name} style={this.props.complete ? {color: 'green'} : {color: 'red'}}>{this.props.name}</option>
    );
  }
}

export default Quest;