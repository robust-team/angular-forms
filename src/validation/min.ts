import { Validation, ValidationType } from '.';

export class Min extends Validation {

  public constructor(
    message: string,
    private _value: number
  ) {
    super(ValidationType.MIN, message);
  }

  public get value(): number {
    return this._value;
  }
}
