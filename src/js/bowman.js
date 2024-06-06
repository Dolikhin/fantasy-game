// bowman.js
import Character from './character.js';

class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defense = 25;
  }
}

export default Bowman;

const arrow = new Bowman;
console.log(arrow)