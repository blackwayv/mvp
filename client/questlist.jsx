import React from 'react';
import $ from 'jquery';
import quests from '../questData.js';

class QuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questPoints: 0
    };
  }

  calculateQP() {
    let points = 0;
    let completed = this.props.state.quests;
    for (let i = 0; i < completed.length; ++i) {
      if (quests.mems[completed[i]]) {
        points += quests.mems[completed[i]].points;
      } else if (quests.free[completed[i]]) {
        points += quests.free[completed[i]].points;
      } else {
        points += quests.mini[completed[i]].points;
      }
    }
    this.setState({ questPoints: points });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state.quests.length !== this.props.state.quests.length) {
      this.calculateQP();
    }
  }

  componentDidMount() {
    this.calculateQP();
  }

  render() {
    let q = document.getElementById('quests');
    return (
      <div id='questlist'> 
        <label>Quests<br/></label>
        Quest Points: {this.state.questPoints}<br />
        <select id="quests" multiple size="13">
          <optgroup label="Free Quests" />
            {Object.keys(quests.free).map((quest, i) => {
              return <option value={quest} key={i} style={this.props.state.quests.indexOf(quest) !== -1 ? {color: 'green'} : {color: 'red'}}>{quest}</option>;
            })}
          <optgroup label="Member's Quests" />
            {Object.keys(quests.mems).map((quest, i) => {
              return <option value={quest} key={i} style={this.props.state.quests.indexOf(quest) !== -1 ? {color: 'green'} : {color: 'red'}}>{quest}</option>;
            })}
          <optgroup label="Miniquests" />
            {Object.keys(quests.mini).map((quest, i) => {
              return <option value={quest} key={i} style={this.props.state.quests.indexOf(quest) !== -1 ? {color: 'green'} : {color: 'red'}}>{quest}</option>
            })}
        </select>
        {/* <div className="requirements">
          {document.getElementById('quests').selectedIndex ? <label>Requirements:</label> : ''}<br/>
          {document.getElementById('quests').options[document.getElementById('quests').selectedIndex].quests.map((quest, i) => {
            <div></div>
          })}
        </div> */}
        <br/>
        <button id="complete" onClick={e => {
          let q = document.getElementById('quests');
          let questArr = this.props.state.quests.slice();
          for (let i = 0; i < q.options.length; ++i) {
            if (q.options[i].selected) {
              if (questArr.indexOf(q.options[i].value) === -1) {
                questArr.push(q.options[i].value);
              }
            }
          }
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.quests = questArr;
          for (let i = 0; i < user.todo.length; ++i) {
            if (questArr.includes(user.todo[i])) {
              user.todo.splice(i, 1);
              --i;
            }
          }
          this.props.update(user);
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Mark as Complete</button>
        <button id="incomplete" type="submit" onClick={e => {
          let q = document.getElementById('quests');
          let questArr = this.props.state.quests.slice();
          for (let i = 0; i < q.options.length; ++i) {
            if (q.options[i].selected) {
              if (this.props.state.quests.indexOf(q.options[i].value)) {
                questArr.splice(questArr.indexOf(q.options[i].value), 1);
              }
            }
          }
          this.props.update({ quests: questArr });
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.quests = questArr;
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Mark as Incomplete</button>
        <button id="add-quest" type="submit" onClick={e => {
          let q = document.getElementById('quests');
          let questArr = this.props.state.todo;
          for (let i = 0; i < q.options.length; ++i) {
            if (q.options[i].selected) {
              if (questArr.indexOf(q.options[i].value) === -1) {
                questArr.push(q.options[i].value);
              }
            }
          }
          this.props.update({ todo: questArr });
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.todo = questArr;
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Add to List</button>
      </div>
    );
  }
}

export default QuestList;