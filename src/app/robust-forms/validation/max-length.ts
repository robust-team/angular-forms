import { Validation } from './validation';

export class MaxLength extends Validation {

  public constructor(
    message: string,
    private _value: number
  ) {
    super(message);
  }

  public get value(): number {
    return this._value;
  }
}
