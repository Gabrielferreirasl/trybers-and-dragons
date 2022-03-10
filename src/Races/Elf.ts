import Race from './Race';

export default class Elf extends Race {
  private maxLife: number;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 99;
    Elf.racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.racesInstances;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}