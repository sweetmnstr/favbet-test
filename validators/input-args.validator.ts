import { BetConditionsEnum } from '../enums';
import { BetConditions, IInputArgs, IInputRawArgs } from '../types';

export class InputArgsValidator {
  private rawBet: string | undefined;
  private rawBetCondition: string | undefined;
  constructor(rawBet: string | undefined, rawBetCondition: string | undefined) {
    this.rawBet = rawBet;
    this.rawBetCondition = rawBetCondition;
  }
  public validate(): IInputArgs {
    try {
      this.throwIfUnknownArgs();
      const inputArgs = this.transformRawArgs();
      return inputArgs as IInputArgs;
    } catch (error) {
      throw new Error(error);
    }
  }
  private throwIfUnknownArgs(): void {
    if (this.checkIfUnknownArgs()) {
      throw new Error('Unknown arguments');
    }
  }
  private checkIfUnknownArgs(): boolean {
    return this.rawBet === undefined || this.rawBetCondition === undefined;
  }

  private transformRawArgs(): IInputRawArgs {
    return {
      bet: this.getOrThrowRawBet(),
      betCondition: this.getOrThrowRawBetCondition(),
    };
  }

  private getOrThrowRawBet(): number {
    const parsedNumber = parseInt(this.rawBet, 10);
    if (!isNaN(parsedNumber)) {
      return parsedNumber;
    }
    throw new Error('Invalid bet');
  }

  private getOrThrowRawBetCondition(): BetConditions {
    const rawBetCondition = this.rawBetCondition;
    const parsedNumber = parseInt(rawBetCondition, 10);
    if (
      Object.values(BetConditionsEnum).includes(
        rawBetCondition as BetConditionsEnum,
      )
    ) {
      return rawBetCondition as BetConditions;
    }
    if (!isNaN(parsedNumber) && parsedNumber >= 0 && parsedNumber <= 36) {
      return parsedNumber as BetConditions;
    }

    throw new Error('Invalid bet condition');
  }
}
