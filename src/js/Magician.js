import Character from './character.js';

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defense = 40;
  }
}

export default Magician;
