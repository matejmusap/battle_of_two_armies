import { Injectable } from '@nestjs/common';
import { Battle } from '../classes/Battle';
import { BattleDay } from './battle.interface';

@Injectable()
export class BattleService {
  async battleOfTwoArmies(army1: number, army2: number): Promise<BattleDay[]> {
    const battleObject = new Battle(army1, army2);
    const battleStatistic: BattleDay[] = await battleObject.battleOfTwoArmies();
    return battleStatistic;
  }
}
