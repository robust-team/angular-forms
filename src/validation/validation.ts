import { ValidationType } from '.';

export abstract class Validation {

  public constructor(
    private _type: ValidationType,
    private _message: string
  ) { }

  public get type(): ValidationType {
    return this._type;
  }

  public get message(): string {
    return this._message;
  }
}
