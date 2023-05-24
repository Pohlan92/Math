import Stoned from './Stoned';

export default class Daemon extends Stoned {
  constructor(name) {
    super(name, 'Daemon');
    this.defence = 40;
    this.attack = 10;
  }
}
