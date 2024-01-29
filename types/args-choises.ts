import { BetConditionsEnum } from '../enums';

export const argsBetConditionChoices = [
  ...Object.values(BetConditionsEnum),
  ...Array.from(Array(37).keys()),
];
