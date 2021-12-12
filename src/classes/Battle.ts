import { BattleDay, BattleOutput } from '../battle/battle.interface';
import { Army } from './Army';
import { General } from './General';

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
      this.army1.numberOfSoldiersArmy = this.reduceNumebrOfSoldiers(
        this.army1.numberOfSoldiersArmy,
        initNumberArmy1,
      );

      this.army2.numberOfSoldiersArmy = this.reduceNumebrOfSoldiers(
        this.army2.numberOfSoldiersArmy,
        initNumberArmy2,
      );
      const battleDay: BattleDay = {
        army1: this.army1.numberOfSoldiersArmy,
        army2: this.army2.numberOfSoldiersArmy,
        day: i++,
      };
      battle.push(battleDay);
    }
    const lastDay = battle[i - 2];
    return {
      WINNER: this.getWinningArmy(lastDay),
      generalsOfArmy1: this.army1.general,
      generalsOfArmy2: this.army2.general,
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
        ? 'No Winner!'
        : 'Army2 is winner'
      : 'Army1 is the winner!';
  }
  private effectOfGeneral(
    general: General,
    oppositeGeneral: General,
    armyNumber: number,
  ) {
    if (general.strength === 'defense') {
      armyNumber = Math.floor(armyNumber * 1.1);
    }
    if (oppositeGeneral.strength === 'attack') {
      armyNumber = Math.floor(armyNumber * 0.95);
    }
    return armyNumber;
  }
  private reduceNumebrOfSoldiers(
    numberOfSoldiers: number,
    initNUmberOfSoldiers: number,
  ): number {
    const armySize = Math.floor(
      numberOfSoldiers - (this.getRandomNumber() / 100) * initNUmberOfSoldiers,
    );
    const armyWithGenerals =
      armySize > 0
        ? this.effectOfGeneral(this.army1.general, this.army2.general, armySize)
        : 0;
    return armyWithGenerals;
  }
}
