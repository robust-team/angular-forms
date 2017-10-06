import { Validation, ValidationType } from '.';

export class Pattern extends Validation {

  public constructor(
    message: string,
    public value: string
  ) {
    super(ValidationType.PATTERN, message);
  }

  /** @override */
  public isRequired(): boolean {
    return ValidationType.PATTERN === this.type && 'true' === this.value.toString();
  }
}
