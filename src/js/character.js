class Character {
  constructor(name, type) {
    const validType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }

    if (!validType.includes(type)) {
      throw new Error('Неверный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.level = 1;
    this._health = 100;
    this._attack = 10; // начальные значения, можно менять
    this._defense = 10; // начальные значения, можно менять
    this._stoned = false;
    this._distance = 1;
    this._powerModeActivated = false;
    this._powerModeUses = 0;
  }

  damage(points) {
    this.health -= points * (1 - this.defense / 100);
    if (this.health < 0) {
      this.health = 0;
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
    return this._powerModeActivated && this._powerModeUses < 3 ? this._health * 2 : this._health;
  }

  set health(value) {
    this._health = Math.max(0, Math.min(value, 100));
  }

  get attack() {
    let attackValue = this._powerModeActivated && this._powerModeUses < 3 ? this._attack * 2 : this._attack;
    attackValue *= (11 - this._distance) / 10;
    if (this._stoned) {
      attackValue -= Math.log2(this._distance) * 5;
    }
    return Math.round(attackValue);
  }

  set attack(value) {
    this._attack = value;
  }

  get defense() {
    return this._powerModeActivated && this._powerModeUses < 3 ? this._defense * 2 : this._defense;
  }

  set defense(value) {
    this._defense = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = value;
  }

  get powerMode() {
    return this._powerModeActivated && this._powerModeUses < 3;
  }

  set powerMode(value) {
    if (value && !this._powerModeActivated) {
      this._powerModeActivated = true;
      this._powerModeUses = 0;
    }
  }
}

export default Character;


// Тестирование
try {
  const magician = new Magician('Merlin');
  magician.distance = 2;
  console.log(magician.attack); // 90
  magician.stoned = true;
  console.log(magician.attack); // 85

  const daemon = new Daemon('Azazel');
  daemon.distance = 3;
  console.log(daemon.attack); // 80
  daemon.stoned = true;
  console.log(daemon.attack); // 75

  daemon.powerMode = true;
  console.log(daemon.attack); // 150 (100 * 2 * 0.8 - Math.log2(3) * 5)

} catch (error) {
  console.error(error.message);
}
