import { Validation } from '.';

export class MaxLength extends Validation {

  public static fromJson(validation: MaxLength): MaxLength {
    return new MaxLength(validation.message, validation.value);
  }

  public constructor(
    message: string,
    private _value: number
  ) {
    super('maxlength', message);
  }

  public get value(): number {
    return this._value;
  }
}
