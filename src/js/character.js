class Character{
  constructor(name, type) {
    const validType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if(typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }

    if(!validType.includes(type)) {
      throw new Error('Неверный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;

    
     
  }

  damage(points) {
    this.health -= points * (1 - this.defense / 100);
    if (this.health < 0) {
      this.health = 0;
    }

    // Уменьшаем счетчик использования powerMode
    if (this.powerMode) {
      this._powerModeUses += 1;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defense = Math.round(this.defense * 1.2);
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }
  }

  get health() {
    return this.powerMode ? this._health * 2 : this._health;
  }

  set health(value) {
    this._health = Math.max(0, Math.min(value, 100));
  }

  get attack() {
    return this.powerMode ? this._attack * 2 : this._attack;
  }

  set attack(value) {
    this._attack = value;
  }

  get defense() {
    return this.powerMode ? this._defense * 2 : this._defense;
  }

  set defense(value) {
    this._defense = value;
  }

  get powerMode() {
    return this._powerModeActivated && this._powerModeUses < 3;
  }

  set powerMode(value) {
    if (value && !this._powerModeActivated) {
      this._powerModeActivated = true;
    }
  }
}

try {
  const bowman = new Character('Лучник', 'Bowman');
  console.log(bowman); // { name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 25, defense: 25 }
  bowman.damage(30);
  console.log(bowman.health);

  const swordsman = new Character('Мечник', 'Swordsman');
  console.log(swordsman); // { name: 'Мечник', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10 }
  
  swordsman.damage(50);
  console.log(swordsman.health);
  
  const invalidCharacter = new Character('СлишкомДлинноеИмя', 'Bowman');
} catch (error) {
  console.error(error.message); // Имя должно быть строкой от 2 до 10 символов
}

export default Character;