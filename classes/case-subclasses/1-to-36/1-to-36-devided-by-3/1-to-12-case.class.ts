import { Basic1to36Case } from '../basic-1-to-36-case.class';

export class OneTo12Case extends Basic1to36Case {
  constructor(betAmount: number) {
    super(betAmount, 3);
    this._lowerLimit = 1;
    this._upperLimit = 12;
  }
}
