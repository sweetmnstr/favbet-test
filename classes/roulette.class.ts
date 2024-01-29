import { BetConditionsEnum } from '../enums';
import { BetConditions, GameCase } from '../types';
import { OneTo18Case } from './case-subclasses/1-to-36/1-to-36-devided-by-2/1-to-18-case.class';
import { NineteenTo36Case } from './case-subclasses/1-to-36/1-to-36-devided-by-2/19-to-36-case.class';
import { OneTo12Case } from './case-subclasses/1-to-36/1-to-36-devided-by-3/1-to-12-case.class';
import { ThirteenTo24Case } from './case-subclasses/1-to-36/1-to-36-devided-by-3/13-to-24-case.class';
import { TwentyFiveTo36Case } from './case-subclasses/1-to-36/1-to-36-devided-by-3/25-to-36-case.class';
import { NumbersCase } from './case-subclasses/numbers-case/numbers-case';
import { EvenCase } from './case-subclasses/odd-even-cases/even-case.class';
import { OddCase } from './case-subclasses/odd-even-cases/odd-case.class';
import { BlackCase } from './case-subclasses/red-black-cases/black-case.class';
import { RedCase } from './case-subclasses/red-black-cases/red-case.class';

export class RouletteGame {
  private betAmount: number;
  private betCondition: BetConditions;

  constructor(betAmount: number, betCondition: BetConditions) {
    this.betAmount = betAmount;
    this.betCondition = betCondition;
  }

  public play(): void {
    const result = this.getGameResult();
    console.log('Result:', result);
    const gameCase = this.getCase();
    if (gameCase.checkWin(result)) {
      const winnings = gameCase.calculateWinnings();
      console.log('You win', winnings);
    } else {
      console.log('You lose');
    }
  }

  private getGameResult(): number {
    return Math.floor(Math.random() * 37);
  }

  private getCase(): GameCase {
    if (typeof this.betCondition === 'number') {
      return new NumbersCase(this.betAmount, this.betCondition);
    }

    switch (this.betCondition) {
      case BetConditionsEnum.BLACK:
        return new BlackCase(this.betAmount);
      case BetConditionsEnum.RED:
        return new RedCase(this.betAmount);
      case BetConditionsEnum.EVEN:
        return new EvenCase(this.betAmount);
      case BetConditionsEnum.ODD:
        return new OddCase(this.betAmount);
      case BetConditionsEnum['1to12']:
        return new OneTo12Case(this.betAmount);
      case BetConditionsEnum['13to24']:
        return new ThirteenTo24Case(this.betAmount);
      case BetConditionsEnum['25to36']:
        return new TwentyFiveTo36Case(this.betAmount);
      case BetConditionsEnum['1to18']:
        return new OneTo18Case(this.betAmount);
      case BetConditionsEnum['19to36']:
        return new NineteenTo36Case(this.betAmount);
    }
  }
}
