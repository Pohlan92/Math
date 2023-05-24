import Character from './Character';

export default class Stoned extends Character {
  #attack = 0;

  #distance = 1;

  #stoned = false;

  get attack() {
    if (this.#distance === 1) {
      return this.#attack;
    }
    if (this.#distance > 1 && this.#distance < 11) {
      const attack = (this.#attack * (110 - (this.#distance * 10))) / 100;
      if (this.#stoned) {
        return attack - (Math.log2(this.#distance) * 5);
      }
      return attack;
    } if (this.#distance >= 11) {
      return 0;
    }
    return this.#attack;
  }

  set attack(attack) {
    this.#attack = attack;
  }

  set stoned(stoned) {
    this.#stoned = Boolean(stoned);
  }

  get stoned() {
    return this.#stoned;
  }

  set distance(distance) {
    this.#distance = Math.max(1, distance);
  }

  levelUp() {
    const { distance } = this;
    this.distance = 1;
    super.levelUp();
    this.distance = distance;
  }
}
