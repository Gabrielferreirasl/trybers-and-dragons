import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  fight(): number {
    this._player2.attack(this.player);
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}