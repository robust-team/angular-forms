import { Validation, ValidationType } from '.';

export class MinLength extends Validation {

  public constructor(
    message: string,
    public value: number
  ) {
    super(ValidationType.MIN_LENGTH, message);
  }
}
