import { Strenght } from '../battle/battle.interface';

export class General {
  strength: Strenght;
  hp: number;
  constructor() {
    this.strength = this.randomStregth();
    this.hp = 75;
  }
  private randomStregth(): Strenght {
    const rand = Math.random() < 0.5;
    const pick: Strenght = rand ? 'attack' : 'defense';
    return pick;
  }
}
