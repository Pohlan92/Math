import Stoned from './Stoned';

export default class Magician extends Stoned {
  constructor(name) {
    super(name, 'Magician');
    this.defence = 40;
    this.attack = 10;
  }
}
