import React from 'react';
import $ from 'jquery';
import quests from '../questData.js';
import check from '../icons/check.png';
import tododelete from '../icons/delete.png';

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
              e.dataTransfer.setData('text/plain', document.getElementById('list').children[i].innerText);
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
            }}>{item}<img src={tododelete} className='tododelete' alt='Delete' onClick={e => {
              let todoArr = this.props.state.todo;
              todoArr.splice(todoArr.indexOf(e.target.parentElement.innerText), 1);
              this.props.update({ todo: todoArr });
              let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
              user.todo = todoArr;
              window.localStorage.setItem(user.username, JSON.stringify(user));
            }}/>{/*<img src={check} className='check' alt='Complete' onClick={e => {
              //Cross off in todo list and complete in quest list or common goals
              //figure out how to remember what todos were checked off previously
              //Feature may be reinstated after deployment
            }}/>*/}</div>;
          })}
        </div>
        <form onSubmit={e => {
            e.preventDefault();
            if (document.getElementById('addList').value.trim() !== '') {
              let todoArr = this.props.state.todo;
              todoArr.push(document.getElementById('addList').value.trim());
              this.props.update({ todo: todoArr });
              let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
              user.todo = todoArr;
              window.localStorage.setItem(user.username, JSON.stringify(user));
              document.getElementById('addList').value = '';
            }}}>
          <input id='addList' name='addList' type='text' placeholder='e.g. Fire cape...' />
          <button id='addSubmit' type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default ToDo;