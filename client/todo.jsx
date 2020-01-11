import React from 'react';
import $ from 'jquery';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id='todo'>
        <label>To-Do List</label><br />
        <select id="list" multiple size="13">
        </select><br />
        <input id="addList" name="addList" type="text" placeholder="e.g. Fire Cape..." />
        <button id="addSubmit" type="submit">Add</button>
        <button id="remove" type="submit">Remove</button><br />
        <label>Move selected:</label>
        <button id="top" type="submit">Top</button>
        <button id="up" type="submit">Up</button>
        <button id="down" type="submit">Down</button>
        <button id="bottom" type="submit">Bottom</button>
        <button id="save" type="submit">Save changes</button>
      </div>
    );
  }
}

export default ToDo;