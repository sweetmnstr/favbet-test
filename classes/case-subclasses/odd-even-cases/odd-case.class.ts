import { oddValues } from '../../../types';
import { BasicCase } from '../basic-case.class';

export class OddCase extends BasicCase {
  constructor(betAmount: number) {
    super(betAmount, 2);
  }
  public checkWin(result: number): boolean {
    return oddValues.includes(result);
  }
}
