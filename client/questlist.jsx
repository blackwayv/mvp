import React from 'react';
import $ from 'jquery';
import quests from '../questData.js';

class QuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questPoints: 0,
      selected: "Black Knights' Fortress"
    };
  }

  generateReqs() {
    let i = 0;
    let requirements = [ <label key={i++}>Requirements:</label> ];
    let q;
    if (quests.mems[this.state.selected]) {
      q = quests.mems[this.state.selected];
    } else if (quests.free[this.state.selected]) {
      q = quests.free[this.state.selected];
    } else {
      q = quests.mini[this.state.selected];
    }
    for (let skill in q.skills) {
      if (this.props.state.skills[skill] < q.skills[skill]) {
        requirements.push(<div key={i++}>{q.skills[skill] + ' ' + skill}</div>);
      } else {
        requirements.push(<div key={i++} className='met'>{q.skills[skill] + ' ' + skill}</div>);
      }
    }
    if (q.quests.length > 0) {
      requirements.push(<br key={i++} />);
    }
    for (let quest of q.quests) {
      if (this.props.state.quests.indexOf(quest) === -1) {
        requirements.push(<div key={i++}>{quest}</div>);
      } else {
        requirements.push(<div key={i++} className='met'>{quest}</div>);
      }
    }
    if (requirements.length < 2) {
      requirements.push(<div key={i++}>None</div>);
    } else if (requirements.length > 10) {
      requirements = requirements.slice(0, 10);
      requirements[10] = <div key={i++} >...and more. See guide:</div>
    }
    requirements.push(<a key={i++} href={q.guide} target='_blank'>OSRS Wiki Guide</a>);
    return requirements;
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
    return (
      <div id='questlist'> 
        <label>Quests<br/></label>
        Quest Points: {this.state.questPoints}<br />
        <select id="quests" className="listbox" multiple size="13" onChange={e => {
          let q = document.getElementById('quests');
          this.setState({ selected: q.options[q.selectedIndex].value })
        }}>
          <optgroup label="Free Quests" />
            {Object.keys(quests.free).map((quest, i) => {
              return <option value={quest} key={i} style={this.props.state.quests.indexOf(quest) !== -1 ? {color: '#00FF3B'} : {color: 'red'}}>{quest}</option>;
            })}
          <optgroup label="Member's Quests" />
            {Object.keys(quests.mems).map((quest, i) => {
              return <option value={quest} key={i} style={this.props.state.quests.indexOf(quest) !== -1 ? {color: '#00FF3B'} : {color: 'red'}}>{quest}</option>;
            })}
          <optgroup label="Miniquests" />
            {Object.keys(quests.mini).map((quest, i) => {
              return <option value={quest} key={i} style={this.props.state.quests.indexOf(quest) !== -1 ? {color: '#00FF3B'} : {color: 'red'}}>{quest}</option>
            })}
        </select>
        <div className="requirements">
          {this.props.state.quests ? this.generateReqs() : ''}
        </div>
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