import { DependencyCriteria } from '.';

export class Dependency {

  public constructor(
    public code: string,
    public criteria: DependencyCriteria,
    public expectedAnswer: string
  ) { }
}
