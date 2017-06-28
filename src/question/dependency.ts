export class Dependency {

  public constructor(
    private _code: string,
    private _criteria: string,
    private _expectedAnswer: string
  ) { }

  public get code(): string {
    return this._code;
  }

  public get criteria(): string {
    return this._criteria;
  }

  public get expectedAnswer(): string {
    return this._expectedAnswer;
  }
}
