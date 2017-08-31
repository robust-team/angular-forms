import { Validation } from '.';

export class Pattern extends Validation {

  public static fromJson(validation: Pattern): Pattern {
    return new Pattern(validation.message, validation.value);
  }

  public constructor(
    message: string,
    private _value: string
  ) {
    super('pattern', message);
  }

  public get value(): string {
    return this._value;
  }
}
