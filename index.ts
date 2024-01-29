import { hideBin } from 'yargs/helpers';

import { InputArgsValidator } from './validators/input-args.validator';
import { argsBetConditionChoices } from './types';
import { RouletteGame } from './classes/roulette.class';

async function main() {
  const [rawBet, rawBetCondition] = hideBin(process.argv);
  const inputArgsValidator = new InputArgsValidator(rawBet, rawBetCondition);
  const { bet, betCondition } = inputArgsValidator.validate();
  console.log(`Bet: ${bet}`);
  console.log(`Bet Condition: ${betCondition}`);

  const game = new RouletteGame(bet, betCondition);
  game.play();
}

main();
