import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  static archetypeInstances = 0;
  private energy: EnergyType;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Necromancer.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}