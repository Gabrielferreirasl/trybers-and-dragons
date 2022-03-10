import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  static archetypeInstances = 0;
  private energy: EnergyType;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Mage.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}