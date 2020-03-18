import React from 'react';
import $ from 'jquery';
import reqs from '../reqsData.js';

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Barrows Gloves"
    };
  }

  generateReqs() {
    let requirements = [ <label>Requirements:</label> ];
    let g = reqs[this.state.selected];
    for (let skill in g.skills) {
      if (this.props.state.skills[skill] < g.skills[skill]) {
        requirements.push(<div>{g.skills[skill] + ' ' + skill}</div>);
      } else {
        requirements.push(<div className='met'>{g.skills[skill] + ' ' + skill}</div>);
      }
    }
    if (g.goals.length > 0) {
      requirements.push(<br/>);
    }
    for (let quest of g.goals) {
      if (this.props.state.goals.indexOf(quest) === -1) {
        requirements.push(<div>{quest}</div>);
      } else {
        requirements.push(<div className='met'>{quest}</div>);
      }
    }
    if (requirements.length < 2) {
      requirements.push(<div>None</div>);
    } else if (requirements.length > 10) {
      requirements = requirements.slice(0, 9);
      requirements[9] = <div>...and more. See guide:</div>
    }
    requirements.push(<a href={g.guide}>OSRS Wiki Guide</a>);
    return requirements;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state.goals.length !== this.props.state.goals.length) {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id='secondlist'> 
        <label>Untradeable Goals<br/></label>
        <select id="goals" multiple size="13" onChange={e => {
          let g = document.getElementById('goals');
          this.setState({ selected: g.options[g.selectedIndex].value })
        }}>

        </select>
        <div className="requirements">
          {this.props.state.goals ? this.generateReqs() : ''}
        </div>
        <br/>
        <button id="complete" onClick={e => {
          let g = document.getElementById('goals');
          let reqsArr = this.props.state.goals.slice();
          for (let i = 0; i < g.options.length; ++i) {
            if (g.options[i].selected) {
              if (reqsArr.indexOf(g.options[i].value) === -1) {
                reqsArr.push(g.options[i].value);
              }
            }
          }
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.goals = reqsArr;
          for (let i = 0; i < user.todo.length; ++i) {
            if (reqsArr.includes(user.todo[i])) {
              user.todo.splice(i, 1);
              --i;
            }
          }
          this.props.update(user);
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Mark as Complete</button>
        <button id="incomplete" type="submit" onClick={e => {
          let g = document.getElementById('goals');
          let reqsArr = this.props.state.goals.slice();
          for (let i = 0; i < g.options.length; ++i) {
            if (g.options[i].selected) {
              if (this.props.state.goals.indexOf(g.options[i].value)) {
                reqsArr.splice(reqsArr.indexOf(g.options[i].value), 1);
              }
            }
          }
          this.props.update({ goals: reqsArr });
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.goals = reqsArr;
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Mark as Incomplete</button>
        <button id="add-quest" type="submit" onClick={e => {
          let g = document.getElementById('goals');
          let reqsArr = this.props.state.todo;
          for (let i = 0; i < g.options.length; ++i) {
            if (g.options[i].selected) {
              if (reqsArr.indexOf(g.options[i].value) === -1) {
                reqsArr.push(g.options[i].value);
              }
            }
          }
          this.props.update({ todo: reqsArr });
          let user = JSON.parse(window.localStorage.getItem(this.props.state.username));
          user.todo = reqsArr;
          window.localStorage.setItem(user.username, JSON.stringify(user));
        }}>Add to List</button>
      </div>
    );
  }
}

export default Goals;