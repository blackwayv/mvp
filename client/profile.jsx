import React from 'react';
import $ from 'jquery';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id='profile'>
        <label>Username: </label>
        <select id="profile">
          <option>Select profile</option>
        </select>
        <button id="load">Load</button><br />
        <input id="username" type="text" placeholder="Username..."></input>
        <button id="search" type="submit">Search</button>
      </div>
    );
  }
}

export default Profile;