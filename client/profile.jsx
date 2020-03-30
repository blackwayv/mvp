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
        }}>Load</button>
        <input id="username" type="text" placeholder="Find your profile..." />
        <button id="search" type='submit' onClick={e => {
          let username = document.getElementById('username').value;
          document.getElementById('pmessage').style = { color: 'white' };
          document.getElementById('pmessage').innerHTML = ' Searching for profile...';
          $.get(`http://localhost:3000/stats/${username}`)
          .then(res => {
            document.getElementById('pmessage').innerHTML = ' Profile successfully created/updated';
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
          .catch(err => {
            document.getElementById('pmessage').innerHTML = ' Invalid user or response from API';
            document.getElementById('pmessage').style = { color: 'red' };
            console.error(err);
          });
        }}>Search</button>
        <div id='pmessage'></div>
      </div>
    );
  }
}

export default Profile;