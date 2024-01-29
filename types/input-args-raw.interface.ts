import { BetConditionsEnum } from '../enums';

export interface IInputRawArgs {
  bet: number | undefined;
  betCondition: number | BetConditionsEnum | undefined;
}
