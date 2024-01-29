import { GameCase } from '../../types';

export abstract class BasicCase implements GameCase {
  protected _winningCofficient: number;
  protected _betAmount: number;

  constructor(betAmount: number, _winningCofficient: number) {
    this._betAmount = betAmount;
    this._winningCofficient = _winningCofficient;
  }

  abstract checkWin(result: number): boolean;

  public calculateWinnings(): number {
    return this._betAmount * this._winningCofficient;
  }
}
