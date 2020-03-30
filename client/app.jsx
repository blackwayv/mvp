import React from 'react';
import reactDOM from 'react-dom';
import HiScores from './hiscores';
import Profile from './profile';
import QuestList from './questlist';
import ToDo from './todo';
import Goals from './commongoals'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div id='overview'>
        <h1 className='header'>Old School RuneScape Account Progress Tracker</h1>
        <Profile update={this.updateState} />
        <div className='bigcontainer'>
          {this.state.todo ? <ToDo state={this.state} update={this.updateState} /> : ''}
          <div className='container'>
            {this.state.quests ? <QuestList state={this.state} update={this.updateState} /> : ''}
            {this.state.quests ? <Goals state={this.state} update={this.updateState} /> : ''}
          </div>
          {this.state.skills ? <HiScores state={this.state} update={this.updateState} /> : ''}
        </div>
      </div>
    );
  };
}

reactDOM.render(<App />, document.getElementById('app'));