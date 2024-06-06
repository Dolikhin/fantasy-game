// bowman.js
import Character from './character.js';

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defense = 25;
  }
}

export default Swordsman;

