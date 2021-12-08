export interface BattleDay {
  army1: number;
  army2: number;
  day: number;
}

export type Battle = BattleDay[];
export type Strenght = 'attack' | 'defense';
