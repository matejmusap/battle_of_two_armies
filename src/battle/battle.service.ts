import { Injectable } from '@nestjs/common';
import { BattleDay } from './battle.interface';

@Injectable()
export class BattleService {
  async battleOfTwoArmies(army1: number, army2: number): Promise<BattleDay[]> {
    const battle: BattleDay[] = [];
    for (let i = 0; i < 5; i++) {
      const battleDay: BattleDay = {
        army1,
        army2,
        day: i,
      };
      battle.push(battleDay);
    }

    return battle;
  }
}
