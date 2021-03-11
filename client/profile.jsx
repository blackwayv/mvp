import React from 'react';
import $ from 'jquery';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  /*{
    "username": "blackwayv",
    "quests": [
        "Black Knights' Fortress",
        "Cook's Assistant",
        "The Corsair Curse",
        "Demon Slayer",
        "Doric's Quest",
        "Dragon Slayer",
        "Ernest the Chicken",
        "Goblin Diplomacy",
        "Imp Catcher",
        "The Knights Sword",
        "Misthalin Mystery",
        "Pirates Treasure",
        "Prince Ali Rescue",
        "The Restless Ghost",
        "Romeo & Juliet",
        "Rune Mysteries",
        "Sheep Shearer",
        "Shield of Arrav",
        "Vampyre Slayer",
        "Witch's Potion",
        "X Marks the Spot",
        "Animal Magnetism",
        "Another Slice of H.A.M.",
        "The Ascent of Arceuus",
        "Between a Rock...",
        "Big Chompy Bird Hunting",
        "Biohazard",
        "Bone Voyage",
        "Cabin Fever",
        "Client of Kourend",
        "Clock Tower",
        "Cold War",
        "Contact!",
        "Creature of Fenkenstrain",
        "Darkness of Hallowvale",
        "Death Plateau",
        "Death to the Dorgeshuun",
        "The Depths of Despair",
        "Desert Treasure",
        "Devious Minds",
        "The Dig Site",
        "Dragon Slayer II",
        "Dream Mentor",
        "Druidic Ritual",
        "Dwarf Cannon",
        "Eadgar's Ruse",
        "Eagles' Peak",
        "Elemental Workshop I",
        "Elemental Workshop II",
        "Enakhra's Lament",
        "Enlightened Journey",
        "The Eyes of Glouphrie",
        "Fairytale I - Growing Pains",
        "Fairytale II - Cure a Queen",
        "Family Crest",
        "The Feud",
        "Fight Arena",
        "Fishing Contest",
        "Forgettable Tale...",
        "The Forsaken Tower",
        "The Fremennik Exiles",
        "The Fremennik Isles",
        "The Fremennik Trials",
        "Garden of Tranquility",
        "Gertrude's Cat",
        "Ghosts Ahoy",
        "The Giant Dwarf",
        "The Golem",
        "The Grand Tree",
        "The Great Brain Robbery",
        "Grim Tales",
        "The Hand in the Sand",
        "Haunted Mine",
        "Hazeel Cult",
        "Heroes' Quest",
        "Holy Grail",
        "Horror from the Deep",
        "Icthlarin's Little Helper",
        "In Aid of the Myreque",
        "In Search of the Myreque",
        "Jungle Potion",
        "King's Ransom",
        "Legends' Quest",
        "Lost City",
        "The Lost Tribe",
        "Lunar Diplomacy",
        "Making Friends with My Arm",
        "Making History",
        "Merlin's Crystal",
        "Monk's Friend",
        "Monkey Madness I",
        "Monkey Madness II",
        "Mountain Daughter",
        "Mourning's End Part I",
        "Mourning's End Part II",
        "Murder Mystery",
        "My Arm's Big Adventure",
        "Nature Spirit",
        "Observatory Quest",
        "Olaf's Quest",
        "One Small Favour",
        "Plague City",
        "Priest in Peril",
        "The Queen of Thieves",
        "Rag and Bone Man",
        "Rag and Bone Man II",
        "Ratcatchers",
        "Recipe for Disaster",
        "Recruitment Drive",
        "Regicide",
        "Roving Elves",
        "Royal Trouble",
        "Rum Deal",
        "Scorpion Catcher",
        "Sea Slug",
        "Shades of Mort'ton",
        "Shadow of the Storm",
        "Sheep Herder",
        "Shilo Village",
        "Sins of the Father",
        "The Slug Menace",
        "Song of the Elves",
        "A Soul's Bane",
        "Spirits of the Elid",
        "Swan Song",
        "Tai Bwo Wannai Trio",
        "A Tail of Two Cats",
        "Tale of the Righteous",
        "A Taste of Hope",
        "Tears of Guthix",
        "Temple of Ikov",
        "Throne of Miscellania",
        "The Tourist Trap",
        "Tower of Life",
        "Tree Gnome Village",
        "Tribal Totem",
        "Troll Romance",
        "Troll Stronghold",
        "Underground Pass",
        "Wanted!",
        "Watchtower",
        "Waterfall Quest",
        "What Lies Below",
        "Witch's House",
        "Zogre Flesh Eaters",
        "Alfred Grimhand's Barcrawl",
        "Architectural Alliance",
        "Bear your Soul",
        "Curse of the Empty Lord",
        "Enchanted Key",
        "Enter the Abyss",
        "Family Pest",
        "The General's Shadow",
        "In Search of Knowledge",
        "Lair of Tarn Razorlor",
        "The Mage Arena",
        "The Mage Arena II",
        "Skippy and the Mogres"
    ],
    "todo": [
        "Ava's assembler",
        "Infernal cape"
    ],
    "goals": [
        "Fighter torso",
        "Fremennik helmets",
        "Helm of neitiznot",
        "Ava's attractor/accumulator",
        "Fire cape",
        "Graceful outfit",
        "Void knight set",
        "Elite void knight top/bottom",
        "Barrows gloves",
        "Dragon defender",
        "Slayer helmet",
        "Salve amulet (e)",
        "Rune pouch",
        "God cape",
        "Imbued god cape",
        "Crystal saw",
        "Magic secateurs"
    ],
    "skills": {
        "overall": {
            "rank": 250561,
            "level": 1867,
            "xp": 83286109
        },
        "attack": {
            "rank": 632920,
            "level": 80,
            "xp": 2007202
        },
        "defence": {
            "rank": 588916,
            "level": 80,
            "xp": 2007209
        },
        "strength": {
            "rank": 766651,
            "level": 84,
            "xp": 3166624
        },
        "hitpoints": {
            "rank": 730515,
            "level": 86,
            "xp": 3611638
        },
        "ranged": {
            "rank": 746848,
            "level": 84,
            "xp": 2952079
        },
        "prayer": {
            "rank": 218965,
            "level": 80,
            "xp": 2018920
        },
        "magic": {
            "rank": 778872,
            "level": 81,
            "xp": 2206809
        },
        "cooking": {
            "rank": 211829,
            "level": 99,
            "xp": 13034501
        },
        "woodcutting": {
            "rank": 74964,
            "level": 99,
            "xp": 13035338
        },
        "fletching": {
            "rank": 189633,
            "level": 91,
            "xp": 6300872
        },
        "fishing": {
            "rank": 482136,
            "level": 76,
            "xp": 1337554
        },
        "firemaking": {
            "rank": 118423,
            "level": 99,
            "xp": 13044478
        },
        "crafting": {
            "rank": 597301,
            "level": 70,
            "xp": 755273
        },
        "smithing": {
            "rank": 179347,
            "level": 83,
            "xp": 2673148
        },
        "mining": {
            "rank": 67422,
            "level": 91,
            "xp": 6233565
        },
        "herblore": {
            "rank": 397372,
            "level": 70,
            "xp": 769151
        },
        "agility": {
            "rank": 252644,
            "level": 76,
            "xp": 1370585
        },
        "thieving": {
            "rank": 213928,
            "level": 78,
            "xp": 1635662
        },
        "slayer": {
            "rank": 438558,
            "level": 80,
            "xp": 2039911
        },
        "farming": {
            "rank": 520104,
            "level": 70,
            "xp": 765181
        },
        "runecraft": {
            "rank": 215099,
            "level": 69,
            "xp": 713087
        },
        "hunter": {
            "rank": 403034,
            "level": 70,
            "xp": 774549
        },
        "construction": {
            "rank": 383008,
            "level": 71,
            "xp": 832773
        }
    }
} */
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
        <select id='profile-select'>
          <option>Select profile</option>
          {this.popOptions()}
        </select>
        <button id='load' onClick={e => {
          let p = document.getElementById('profile-select');
          this.props.update(JSON.parse(window.localStorage.getItem(p.options[p.selectedIndex].value)));
        }}>Load</button>
        <form autoComplete='off' style={{ display: 'inline-block' }} onSubmit={e => {
            e.preventDefault();
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
          }}>
          <input id='username' type='text' placeholder='Find your profile...' autoComplete='off' />
          <button id='search' type='submit'>Search</button>
        </form>
        <div id='pmessage'></div>
      </div>
    );
  }
}

export default Profile;