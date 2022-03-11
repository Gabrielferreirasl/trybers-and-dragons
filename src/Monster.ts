import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  private set lifePoints(_damage) {
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number) {
    this._lifePoints -= attackPoints;

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}