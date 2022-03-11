import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import { SimpleFighter } from './Fighter';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints:number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name: string,
    race: Race = new Elf(name, getRandomInt(1, 10)),
    archetype: Archetype = new Mage(name),
  ) {
    this._name = name;
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get name(): string {
    return this._name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
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

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this._strength);
  }

  levelUp() {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    const increase = getRandomInt(1, 10);
    if (this._maxLifePoints + increase > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints += increase;
    }

    this.lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter) {
    this._defense += 2;
    enemy.receiveDamage(this._strength + getRandomInt(1, 5));
  }
}
