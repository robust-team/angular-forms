export abstract class Validation {

  public constructor(
    private _type: string,
    private _message: string
  ) { }

  public get type(): string {
    return this._type;
  }

  public get message(): string {
    return this._message;
  }
}
