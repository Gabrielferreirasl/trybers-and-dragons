import Race from './Race';

export default class Orc extends Race {
  private maxLife: number;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 74;
    Orc.racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.racesInstances;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}