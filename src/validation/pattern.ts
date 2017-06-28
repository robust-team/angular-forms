import { Validation } from '.';

export class Pattern extends Validation {

  public static fromJson(validation: Pattern): Pattern {
    return new Pattern(validation.type, validation.message, validation.value);
  }

  public constructor(
    type: string,
    message: string,
    private _value: string
  ) {
    super(type, message);
  }

  public get value(): string {
    return this._value;
  }
}
