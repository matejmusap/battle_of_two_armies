import { General } from 'src/classes/General';

export interface BattleDay {
  army1: number;
  army2: number;
  day: number;
}

export interface BattleOutput {
  WINNER: string;
  generalsOfArmy1: General;
  generalsOfArmy2: General;
  battleDays: BattleDay[];
}

export type Battle = BattleOutput;
export type Strenght = 'attack' | 'defense';
