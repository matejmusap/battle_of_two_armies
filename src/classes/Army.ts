import { General } from './General';

export class Army {
  numberOfSoldiersArmy: number;
  general: General;
  constructor(army: number) {
    this.numberOfSoldiersArmy = army;
    this.general = new General();
  }
}
