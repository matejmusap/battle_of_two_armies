import { Injectable } from '@nestjs/common';
import { Battle } from '../classes/Battle';
import { BattleOutput } from './battle.interface';

@Injectable()
export class BattleService {
  async battleOfTwoArmies(army1: number, army2: number): Promise<BattleOutput> {
    const battleObject = new Battle(army1, army2);
    const battleStatistic: BattleOutput =
      await battleObject.battleOfTwoArmies();
    return battleStatistic;
  }
}
