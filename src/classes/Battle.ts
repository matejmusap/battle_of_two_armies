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
    let i = 1;
    while (
      this.army1.numberOfSoldiersArmy > 0 &&
      this.army2.numberOfSoldiersArmy > 0
    ) {
      console.log(this.army1.numberOfSoldiersArmy);
      console.log(this.army2.numberOfSoldiersArmy);
      this.army1.numberOfSoldiersArmy = Math.floor(
        this.army1.numberOfSoldiersArmy -
          (this.getRandomNumber() / 100) * this.army1.numberOfSoldiersArmy,
      );

      this.army2.numberOfSoldiersArmy = Math.floor(
        this.army2.numberOfSoldiersArmy -
          (this.getRandomNumber() / 100) * this.army2.numberOfSoldiersArmy,
      );
      const battleDay: BattleDay = {
        army1:
          this.army1.numberOfSoldiersArmy > 0
            ? this.army1.numberOfSoldiersArmy
            : 0,
        army2:
          this.army2.numberOfSoldiersArmy > 0
            ? this.army2.numberOfSoldiersArmy
            : 0,
        day: i++,
      };
      battle.push(battleDay);
    }
    3;

    return battle;
  }
  private getRandomNumber(): number {
    return this.getRandomArbitrary(10, 26);
  }
  private getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
