import { Basic1to36Case } from '../basic-1-to-36-case.class';

export class NineteenTo36Case extends Basic1to36Case {
  constructor(betAmount: number) {
    super(betAmount, 2);
    this._lowerLimit = 19;
    this._upperLimit = 36;
  }
}
