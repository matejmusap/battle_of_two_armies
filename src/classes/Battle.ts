import { BattleDay } from '../battle/battle.interface';
import { Army } from './Army';

export class Battle {
  army1: Army;
  army2: Army;
  constructor(army1: number, army2: number) {
    this.army1 = new Army(army1);
    this.army2 = new Army(army2);
  }
  public async battleOfTwoArmies(): Promise<BattleDay[]> {
    const battle: BattleDay[] = [];
    for (let i = 0; i < 5; i++) {
      const battleDay: BattleDay = {
        army1: this.army1.numberOfSoldiersArmy,
        army2: this.army2.numberOfSoldiersArmy,
        day: i + 1,
      };
      battle.push(battleDay);
    }

    return battle;
  }
}
