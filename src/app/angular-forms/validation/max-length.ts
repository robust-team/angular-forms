import { Validation } from '.';

export class MaxLength extends Validation {

  public static fromJson(validation: MaxLength): MaxLength {
    return new MaxLength(validation.type, validation.message, validation.value);
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
