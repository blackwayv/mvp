import React from 'react';
import $ from 'jquery';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  popOptions() {
    let arr = [];
    for (let key in window.localStorage) {
      if (typeof window.localStorage[key] === 'string') {
        arr.push(<option key={key} value={key}>{key}</option>);
      }
    }
    return arr;
  }

  render() {
    return (
      <div id='profile'>
        <label>Username: </label>
        <select id="profile-select">
          <option>Select profile</option>
          {this.popOptions()}
        </select>
        <button id="load" onClick={e => {
          let p = document.getElementById('profile-select');
          this.props.update(JSON.parse(window.localStorage.getItem(p.options[p.selectedIndex].value)));
        }}>Load</button><br />
        <input id="username" type="text" placeholder="Username..." />
        <button id="search" type='submit' onClick={e => {
          let username = document.getElementById('username').value;
          $.get(`http://localhost:3000/stats/${username}`)
          .then(res => {
            if (!JSON.parse(window.localStorage.getItem(username))) {
              let user = { username, quests: [], todo: [], goals: [], skills: res.main.skills };
              window.localStorage.setItem(username, JSON.stringify(user));
              this.props.update(user);
            } else {
              let user = JSON.parse(window.localStorage.getItem(username));
              user.skills = res.main.skills;
              window.localStorage.setItem(username, JSON.stringify(user));
              this.props.update(user);
            }
          })
          .catch(err => console.error(err));
        }}>Search</button>
      </div>
    );
  }
}

export default Profile;