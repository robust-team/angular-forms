import { Validation, ValidationType } from '.';

export class Max extends Validation {

  public static fromJson(validation: Max): Max {
    return new Max(validation.message, validation.value);
  }

  public constructor(
    message: string,
    private _value: number
  ) {
    super(ValidationType.MAX, message);
  }

  public get value(): number {
    return this._value;
  }
}
