import React from 'react';
import reactDOM from 'react-dom';
import HiScores from './hiscores';
import Profile from './profile';
import QuestList from './questlist';
import ToDo from './todo';

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
          <div className='container1'>
            {this.state.quests ? <QuestList state={this.state} update={this.updateState} /> : ''}
            {this.state.todo ? <ToDo state={this.state} update={this.updateState} /> : ''}
          </div>
          <div className='container2'>
            {this.state.skills ? <HiScores skills={this.state.skills} /> : ''}
          </div>
        </div>
      </div>
    );
  };
}

reactDOM.render(<App />, document.getElementById('app'));