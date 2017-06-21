import { Validation } from '.';

export class Max extends Validation {

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

  public static fromJson(validation: Max): Max {
    return new Max(validation.type, validation.message, validation.value);
  }
}
