import { evenValues } from '../../../types';
import { BasicCase } from '../basic-case.class';

export class EvenCase extends BasicCase {
  constructor(betAmount: number) {
    super(betAmount, 2);
  }
  public checkWin(result: number): boolean {
    return evenValues.includes(result);
  }
}
