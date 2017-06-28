export class Dependency {

  public constructor(
    private _name: string,
    private _criteria: string,
    private _expectedAnswer: string
  ) { }

  public get name(): string {
    return this._name;
  }

  public get criteria(): string {
    return this._criteria;
  }

  public get expectedAnswer(): string {
    return this._expectedAnswer;
  }
}
