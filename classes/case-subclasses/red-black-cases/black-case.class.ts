import { blackValues } from '../../../types';
import { BasicCase } from '../basic-case.class';

export class BlackCase extends BasicCase {
  constructor(betAmount: number) {
    super(betAmount, 2);
  }
  public checkWin(result: number): boolean {
    return blackValues.includes(result);
  }
}
