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
          {this.props.state.todo.map((item, i) => {
            return <option key={i} value={item}>{item}</option>;
          })}
        </select><br />
        <input id="addList" name="addList" type="text" placeholder="e.g. Fire cape..." />
        <button id="addSubmit" type="submit" onClick={e => {
          let todoArr = this.props.state.todo;
          todoArr.push(document.getElementById('addList').value);
          this.props.update({ todo: todoArr });
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.todo = todoArr;
          window.localStorage.setItem(user.username, JSON.stringify(user));
          document.getElementById('addList').value = '';
        }}>Add</button>
        <button id="remove" type="submit" onClick={e => {
          let l = document.getElementById('list');
          let todoArr = this.props.state.todo;
          for (let i = 0; i < l.options.length; ++i) {
            if (l.options[i].selected) {
              todoArr.splice(todoArr.indexOf(l.options[i].value), 1);
            }
          }
          this.props.update({ todo: todoArr });
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.todo = todoArr;
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Remove</button><br />
        <label>Move selected:</label>
        <button id="top" type="submit" onClick={e => {
          let l = document.getElementById('list');
          let todoArr = this.props.state.todo;
          let topArr = [];
          for (let i = 0; i < l.options.length; ++i) {
            if (l.options[i].selected) {
              l.options[i].selected = false;
              topArr.push(todoArr.splice(todoArr.indexOf(l.options[i].value), 1)[0]);
            }
          }
          todoArr = topArr.concat(todoArr);
          this.props.update({ todo: todoArr });
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.todo = todoArr;
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Top</button>
        <button id="up" type="submit" >Up</button>
        <button id="down" type="submit">Down</button>
        <button id="bottom" type="submit" onClick={e => {
          let l = document.getElementById('list');
          let todoArr = this.props.state.todo;
          let bottomArr = [];
          for (let i = 0; i < l.options.length; ++i) {
            if (l.options[i].selected) {
              l.options[i].selected = false;
              bottomArr.push(todoArr.splice(todoArr.indexOf(l.options[i].value), 1)[0]);
            }
          }
          todoArr = todoArr.concat(bottomArr);
          this.props.update({ todo: todoArr });
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.todo = todoArr;
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Bottom</button>
        {/* <button id="save" type="submit">Save changes</button> */}
      </div>
    );
  }
}

export default ToDo;