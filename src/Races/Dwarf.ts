import Race from './Race';

export default class Dwarf extends Race {
  private maxLife: number;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 80;
    Dwarf.racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.racesInstances;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}
