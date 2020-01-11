import React from 'react';
import $ from 'jquery';
import Quest from './quest';

class QuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      free: ["Black Knights' Fortress","Cook's Assistant","The Corsair Curse","Demon Slayer","Doric's Quest","Dragon Slayer","Ernest the Chicken","Goblin Diplomacy","Imp Catcher","The Knights Sword","Misthalin Mystery","Pirates Treasure","Prince Ali Rescue","The Restless Ghost","Romeo & Juliet","Rune Mysteries","Sheep Shearer","Shield of Arrav","Vampire Slayer","Witch's Potion","X Marks the Spot"],
      mems: ["Animal Magnetism","Another Slice of H.A.M.","The Ascent of Arceuus","Between a Rock...","Big Chompy Bird Hunting","Biohazard","Bone Voyage","Cabin Fever","Client of Kourend","Clock Tower","Cold War","Contact!","Creature of Fenkenstrain","Darkness of Hallowvale","Death Plateau","Death to the Dorgeshuun","The Depths of Despair","Desert Treasure","Devious Minds","The Dig Site","Dragon Slayer II","Dream Mentor","Druidic Ritual","Dwarf Cannon","Eadgar's Ruse","Eagles' Peak","Elemental Workshop I","Elemental Workshop II","Enakhra's Lament","Enlightened Journey","The Eyes of Glouphrie","Fairytale I - Growing Pains","Fairytale II - Cure a Queen","Family Crest","The Feud","Fight Arena","Fishing Contest","Forgettable Tale...","The Forsaken Tower","The Fremennik Exiles","The Fremennik Isles","The Fremennik Trials","Garden of Tranquility","Gertrude's Cat","Ghosts Ahoy","The Giant Dwarf","The Golem","The Grand Tree","The Great Brain Robbery","Grim Tales","The Hand in the Sand","Haunted Mine","Hazeel Cult","Heroes' Quest","Holy Grail","Horror from the Deep","Icthlarin's Little Helper","In Aid of the Myreque","In Search of the Myreque","Jungle Potion","King's Ransom","Legends' Quest","Lost City","The Lost Tribe","Lunar Diplomacy","Making Friends with My Arm","Making History","Merlin's Crystal","Monk's Friend","Monkey Madness I","Monkey Madness II","Mountain Daughter","Mourning's End Part I","Mourning's End Part II","Murder Mystery","My Arm's Big Adventure","Nature Spirit","Observatory Quest","Olaf's Quest","One Small Favour","Plague City","Priest in Peril","The Queen of Thieves","Rag and Bone Man","Rag and Bone Man II","Ratcatchers","Recipe for Disaster","Recruitment Drive","Regicide","Roving Elves","Royal Trouble","Rum Deal","Scorpion Catcher","Sea Slug","Shades of Mort'ton","Shadow of the Storm","Sheep Herder","Shilo Village","The Slug Menace","Song of the Elves","A Soul's Bane","Spirits of the Elid","Swan Song","Tai Bwo Wannai Trio","A Tail of Two Cats","Tale of the Righteous","A Taste of Hope","Tears of Guthix","Temple of Ikov","Throne of Miscellania","The Tourist Trap","Tower of Life","Tree Gnome Village","Tribal Totem","Troll Romance","Troll Stronghold","Underground Pass","Wanted!","Watchtower","Waterfall Quest","What Lies Below","Witch's House","Zogre Flesh Eaters"],
      mini: ["Alfred Grimhand's Barcrawl","Architectural Alliance","Bear your Soul","Curse of the Empty Lord","Enchanted Key","Enter the Abyss","Family Pest","The General's Shadow","In Search of Knowledge","Lair of Tarn Razorlor","The Mage Arena","The Mage Arena II","Skippy and the Mogres"],
      complete: []
    };
  }

  render() {
    return (
      <div id='quests'>
        <label>Quests</label> <br />
        <select id="quests" multiple size="13">
          <optgroup label="Free Quests">
            {this.state.free.map((quest, i) => {
              return <Quest name={quest} key={i} complete={this.state.complete.indexOf(quest) !== -1 ? true : false} />
            })}
          </optgroup>
          <optgroup label="Member's Quests">
            {this.state.mems.map((quest, i) => {
              return <Quest name={quest} key={i} complete={this.state.complete.indexOf(quest) !== -1 ? true : false} />
            })}
          </optgroup>
          <optgroup label="Miniquests">
            {this.state.mini.map((quest, i) => {
              return <Quest name={quest} key={i} complete={this.state.complete.indexOf(quest) !== -1 ? true : false} />
            })}
          </optgroup>
        </select>
        <button id="complete" type="submit">Mark as Complete</button>
        <button id="incomplete" type="submit">Mark as Incomplete</button>
        <button id="add-quest" type="submit">Add to List</button>
      </div>
    );
  }
}

export default QuestList;