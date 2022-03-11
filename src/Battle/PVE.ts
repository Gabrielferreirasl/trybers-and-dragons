import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player2: Monster[] | SimpleFighter[];

  constructor(player1: Fighter, player2: Monster[] | SimpleFighter[]) {
    super(player1);
    this._player2 = player2;
  }

  player1AttackWins() {
    this._player2.forEach((pl) => this.player.attack(pl));
    if (this._player2.every((player) => player.lifePoints === -1)) {
      return true;
    }
  }

  player2AttackWins() {
    this._player2.forEach((pl) => {
      if (pl.lifePoints !== -1) pl.attack(this.player);
    });
    if (this.player.lifePoints === -1) {
      return true;
    }
  }

  fight(): number {
    let result = 0;
    while (result === 0) {
      if (this.player1AttackWins()) result = 1;
      else if (this.player2AttackWins()) result = -1;
    }
    return result;
  }
}