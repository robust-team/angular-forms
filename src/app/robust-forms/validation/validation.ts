export abstract class Validation {

  public constructor(
    private _validationType: string,
    private _message: string
  ) { }

  public get validationType(): string {
    return this._validationType;
  }

  public get message(): string {
    return this._message;
  }
}
