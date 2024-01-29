import { Basic1to36Case } from '../basic-1-to-36-case.class';

export class ThirteenTo24Case extends Basic1to36Case {
  constructor(betAmount: number) {
    super(betAmount, 3);
    this._lowerLimit = 13;
    this._upperLimit = 24;
  }
}
