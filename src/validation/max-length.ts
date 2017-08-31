import { Validation, ValidationType } from '.';

export class MaxLength extends Validation {

  public constructor(
    message: string,
    private _value: number
  ) {
    super(ValidationType.MAX_LENGTH, message);
  }

  public get value(): number {
    return this._value;
  }
}
