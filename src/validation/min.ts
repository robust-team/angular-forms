import { Validation } from '.';

export class Min extends Validation {

  public static fromJson(validation: Min): Min {
    return new Min(validation.type, validation.message, validation.value);
  }

  public constructor(
    type: string,
    message: string,
    private _value: number
  ) {
    super(type, message);
  }

  public get value(): number {
    return this._value;
  }
}
