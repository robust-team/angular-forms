import { Validation, ValidationType } from '.';

export class MaxLength extends Validation {

  public constructor(
    message: string,
    public value: number
  ) {
    super(ValidationType.MAX_LENGTH, message);
  }
}
