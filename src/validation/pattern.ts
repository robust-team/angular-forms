import { Validation, ValidationType } from '.';

export class Pattern extends Validation {

  public constructor(
    message: string,
    private _value: string
  ) {
    super(ValidationType.PATTERN, message);
  }

  /** @override */
  public isRequired(): boolean {
    return ValidationType.PATTERN === this.type && 'true' === this._value.toString();
  }

  public get value(): string {
    return this._value;
  }
}
