import { DependencyCriteria } from '.';

export class Dependency {

  public constructor(
    private _code: string,
    private _criteria: DependencyCriteria,
    private _expectedAnswer: string
  ) { }

  public get code(): string {
    return this._code;
  }

  public get criteria(): DependencyCriteria {
    return this._criteria;
  }

  public get expectedAnswer(): string {
    return this._expectedAnswer;
  }
}
