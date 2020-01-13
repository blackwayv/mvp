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
    for (let key in this.props.skills) {
      arr.push(<tr key={key}><td>{key}</td>
        <td>{this.props.skills[key].rank}</td>
        <td>{this.props.skills[key].level}</td>
        <td>{this.props.skills[key].xp}</td>
      </tr>
      );
    }
    return arr;
  }

  render() {
    return (
      <div id='hiscores'>
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