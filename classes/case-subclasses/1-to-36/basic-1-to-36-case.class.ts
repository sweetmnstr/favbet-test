import { BasicCase } from '../basic-case.class';

export abstract class Basic1to36Case extends BasicCase {
  protected _upperLimit: number;
  protected _lowerLimit: number;

  public checkWin(result: number): boolean {
    return result >= this._lowerLimit && result <= this._upperLimit;
  }
}
