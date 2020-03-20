import React from 'react';
import $ from 'jquery';

class HiScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  popSkills() {
    let arr = [];
    for (let key in this.props.state.skills) {
      arr.push(<tr key={key}><td>{key}</td>
        <td>{this.props.state.skills[key].rank}</td>
        <td>{this.props.state.skills[key].level}</td>
        <td>{this.props.state.skills[key].xp}</td>
      </tr>
      );
    }
    return arr;
  }

  render() {
    return (
      <div id='hiscores'>
        <button type='submit' onClick={e => {
          let username = this.props.state.username;
          document.getElementById('hmessage').style = { color: 'white' };
          document.getElementById('hmessage').innerHTML = 'Updating...';
          $.get(`http://localhost:3000/stats/${username}`)
          .then(res => {
            document.getElementById('hmessage').innerHTML = 'Skills successfully updated';
            let user = JSON.parse(window.localStorage.getItem(username));
            user.skills = res.main.skills;
            window.localStorage.setItem(username, JSON.stringify(user));
            this.props.update(user);
          })
          .catch(err => {
            document.getElementById('hmessage').innerHTML = 'Invalid user or response from API';
            document.getElementById('hmessage').style = { color: 'red' };
            console.error(err)
          });
        }}>Update Skills</button>
        <div id='hmessage'></div>
        <table>
          <tbody id="skills">
            <tr><th className="skillH">Skill</th>
              <th className="rankH">Rank</th>
              <th className="levelH">Level</th>
              <th className="expH">Experience</th>
            </tr>
            {this.popSkills()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HiScores;