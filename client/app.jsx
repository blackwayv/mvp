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
  }

  render() {
    return (
      <div id='overview'>
        <Profile />
        <QuestList />
        <ToDo />
        <HiScores />
      </div>
    );
  };
}

reactDOM.render(<App />, document.getElementById('app'));