import { redValues } from '../../../types';
import { BasicCase } from '../basic-case.class';

export class RedCase extends BasicCase {
  constructor(betAmount: number) {
    super(betAmount, 2);
  }
  public checkWin(result: number): boolean {
    return redValues.includes(result);
  }
}
