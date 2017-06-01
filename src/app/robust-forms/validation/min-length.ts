import { Validation } from '.';

export class MinLength extends Validation {

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

  public static fromJson(validation: MinLength): MinLength {
    return new MinLength(validation.validationType, validation.message, validation.value);
  }
}
