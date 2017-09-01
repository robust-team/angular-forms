import { Validation, ValidationType } from '.';

export class MinLength extends Validation {

  public constructor(
    message: string,
    private _value: number
  ) {
    super(ValidationType.MIN_LENGTH, message);
  }

  public get value(): number {
    return this._value;
  }
}
