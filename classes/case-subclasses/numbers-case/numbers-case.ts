import { GameCase, NumberConditions } from '../../../types';
import { BasicCase } from '../basic-case.class';

export class NumbersCase extends BasicCase {
  private condition: NumberConditions;
  constructor(betAmount: number, condition: NumberConditions) {
    super(betAmount, 36);
    this.condition = condition;
  }
  public checkWin(result: number): boolean {
    return result === this.condition;
  }
}
