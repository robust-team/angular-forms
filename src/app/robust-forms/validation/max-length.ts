import { Validation } from '.';

export class MaxLength extends Validation {

  public constructor(
    validationType: string,
    message: string,
    private _value: number
  ) {
    super(validationType, message);
  }

  public get value(): number {
    return this._value;
  }

  public static fromJson(validation: MaxLength): MaxLength {
    return new MaxLength(validation.validationType, validation.message, validation.value);
  }
}
