export interface GameCase {
  checkWin(result: number): boolean;
  calculateWinnings(): number;
}
