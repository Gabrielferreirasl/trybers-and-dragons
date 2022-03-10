import Race from './Race';

export default class Halfling extends Race {
  private maxLife: number;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 60;
    Halfling.racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.racesInstances;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}