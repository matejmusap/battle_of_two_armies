import { BattleDay, BattleOutput } from '../battle/battle.interface';
import { Army } from './Army';

export class Battle {
  army1: Army;
  army2: Army;
  constructor(army1: number, army2: number) {
    this.army1 = new Army(army1);
    this.army2 = new Army(army2);
  }
  public async battleOfTwoArmies(): Promise<BattleOutput> {
    const battle: BattleDay[] = [];
    let i = 1;
    const initNumberArmy1 = this.army1.numberOfSoldiersArmy;
    const initNumberArmy2 = this.army2.numberOfSoldiersArmy;
    while (
      this.army1.numberOfSoldiersArmy > 0 &&
      this.army2.numberOfSoldiersArmy > 0
    ) {
      this.army1.numberOfSoldiersArmy = Math.floor(
        this.army1.numberOfSoldiersArmy -
          (this.getRandomNumber() / 100) * initNumberArmy1,
      );

      this.army2.numberOfSoldiersArmy = Math.floor(
        this.army2.numberOfSoldiersArmy -
          (this.getRandomNumber() / 100) * initNumberArmy2,
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
    const lastDay = battle[i - 2];
    return {
      WINNER: this.getWinningArmy(lastDay),
      battleDays: battle,
    };
  }
  private getRandomNumber(): number {
    return this.getRandomArbitrary(10, 26);
  }
  private getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  private getWinningArmy(obj: BattleDay): string {
    return obj.army1 === 0
      ? obj.army2 === 0
        ? 'All soldiers are death!'
        : 'Army2 is winner'
      : 'Army1 is the winner!';
  }
}
