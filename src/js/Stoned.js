import Character from "./Character";

export default class Stoned extends Character {
  _attack = 0;

  _distance = 1;

  _stoned = false;

  get attack() {
    if (this._distance === 1) {
      return this._attack;
    }
    if (this._distance > 1 && this._distance < 11) {
      const attack = (this._attack * (110 - this._distance * 10)) / 100;
      if (this._stoned) {
        return attack - Math.log2(this._distance) * 5;
      }
      return attack;
    }
    if (this._distance >= 11) {
      return 0;
    }
    return this._attack;
  }

  set attack(attack) {
    this._attack = attack;
  }

  set stoned(stoned) {
    this._stoned = Boolean(stoned);
  }

  get stoned() {
    return this._stoned;
  }

  set distance(distance) {
    this._distance = Math.max(1, distance);
  }

  levelUp() {
    const { distance } = this;
    this.distance = 1;
    super.levelUp();
    this.distance = distance;
  }
}
