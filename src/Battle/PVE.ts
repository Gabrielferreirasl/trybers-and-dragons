import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player2: Monster[] | SimpleFighter[];

  constructor(player1: Fighter, player2: Monster[] | SimpleFighter[]) {
    super(player1);
    this._player2 = player2;
  }

  fight(): number {
    this._player2.forEach((monster) => {
      monster.attack(this.player);
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}