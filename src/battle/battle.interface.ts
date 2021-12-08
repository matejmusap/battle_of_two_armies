export interface BattleDay {
  army1: number;
  army2: number;
  day: number;
}

export interface BattleOutput {
  WINNER: string;
  battleDays: BattleDay[];
}

export type Battle = BattleOutput;
export type Strenght = 'attack' | 'defense';
