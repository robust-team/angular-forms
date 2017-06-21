import { Validation } from '.';

export class MinLength extends Validation {

  public static fromJson(validation: MinLength): MinLength {
    return new MinLength(validation.type, validation.message, validation.value);
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
