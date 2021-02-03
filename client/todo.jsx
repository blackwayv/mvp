import React from 'react';
import $ from 'jquery';
import quests from '../questData.js';

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
        <div id='list' className='listbox' onDragOver={e => e.preventDefault()} onDragEnter={e => e.preventDefault()} onDrop={e => {
          e.preventDefault();
          if (e.target.id === 'list') {
            let todoArr = this.props.state.todo;
            todoArr.splice(todoArr.indexOf(e.dataTransfer.getData('text/plain')), 1);
            todoArr.push(e.dataTransfer.getData('text/plain'));
            this.props.update({ todo: todoArr });
            let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
            user.todo = todoArr;
            window.localStorage.setItem(user.username, JSON.stringify(user));
          }
        }}>
          {this.props.state.todo.map((item, i) => {
            return <div key={i} className='listItem' draggable='true' onDragOver={e => e.preventDefault()} onDragStart={e => {
              e.dataTransfer.setData('text/plain', document.getElementById('list').children[i].innerText.slice(0, -3));
            }} onDrop={e => {
              e.preventDefault();
              let todoArr = this.props.state.todo;
              let drop = todoArr.indexOf(e.target.innerText);
              todoArr.splice(todoArr.indexOf(e.dataTransfer.getData('text/plain')), 1);
              todoArr.splice(drop, 0, e.dataTransfer.getData('text/plain'));
              this.props.update({ todo: todoArr });
              let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
              user.todo = todoArr;
              window.localStorage.setItem(user.username, JSON.stringify(user));
            }} onMouseEnter={e => {
              e.target.children[0].style = 'display: inline';
              e.target.children[1].style = 'display: inline';       
            }} onMouseLeave={e => {
              if (e.target.className === 'listItem') {
                e.target.children[0].style = 'display: none';
                e.target.children[1].style = 'display: none';       
              } else {
                e.target.parentElement.children[0].style = 'display: none';
                e.target.parentElement.children[1].style = 'display: none';
              }
            }}>{item}<div className='tododelete' onClick={e => {
              let todoArr = this.props.state.todo;
              todoArr.splice(todoArr.indexOf(e.target.parentElement.innerText), 1);
              this.props.update({ todo: todoArr });
              let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
              user.todo = todoArr;
              window.localStorage.setItem(user.username, JSON.stringify(user));
            }}><img src='~/icons/delete.png'/></div><div className='check' onClick={e => {
 
            }}><img src='~/icons/check.png'/></div></div>;
          })}
        </div>
        <input id='addList' name='addList' type='text' placeholder='e.g. Fire cape...' />
        <button id='addSubmit' type='submit' onSubmit={e => {
          if (document.getElementById('addList').value.trim() !== '') {
            let todoArr = this.props.state.todo;
            todoArr.push(document.getElementById('addList').value.trim());
            this.props.update({ todo: todoArr });
            let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
            user.todo = todoArr;
            window.localStorage.setItem(user.username, JSON.stringify(user));
            document.getElementById('addList').value = '';
          }
        }}>Add</button>
        {/* <button id='remove' type='submit' onClick={e => {
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
        }}>Remove</button><br /> */}
        {/* Move selected: 
        <button id='top' type='submit' onClick={e => {
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
        <button id='up' type='submit' onClick={e => {
          let l = document.getElementById('list');
          let todoArr = this.props.state.todo;
          for (let i = 0; i < l.options.length; ++i) {
            if (l.options[i].selected && i > 0) {
              l.options[i].selected = false;
              let index = todoArr.indexOf(l.options[i].value);
              let temp = l.options[i].value;
              todoArr[index] = todoArr[index-1];
              todoArr[index-1] = temp;
              l.options[i-1].selected = true;
            }
          }
          this.props.update({ todo: todoArr });
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.todo = todoArr;
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Up</button>
        <button id='down' type='submit' onClick={e => {
          let l = document.getElementById('list');
          let todoArr = this.props.state.todo;
          for (let i = l.options.length-1; i >= 0; --i) {
            if (l.options[i].selected && i < l.options.length-1) {
              l.options[i].selected = false;
              let index = todoArr.indexOf(l.options[i].value);
              let temp = l.options[i].value;
              todoArr[index] = todoArr[index+1];
              todoArr[index+1] = temp;
              l.options[i+1].selected = true;
            }
          }
          this.props.update({ todo: todoArr });
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.todo = todoArr;
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Down</button>
        <button id='bottom' type='submit' onClick={e => {
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
        }}>Bottom</button> */}
      </div>
    );
  }
}

export default ToDo;