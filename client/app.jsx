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
        <Profile update={this.updateState} />
        <div className='bigcontainer'>
          {this.state.todo ? <ToDo state={this.state} update={this.updateState} /> : ''}
          <div className='container'>
            {this.state.quests ? <QuestList state={this.state} update={this.updateState} /> : ''}

          </div>
          {this.state.skills ? <HiScores skills={this.state.skills} /> : ''}
        </div>
      </div>
    );
  };
}

reactDOM.render(<App />, document.getElementById('app'));