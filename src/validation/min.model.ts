import { Validation, ValidationType } from '.';

export class Min extends Validation {

  public constructor(
    message: string,
    public value: number
  ) {
    super(ValidationType.MIN, message);
  }
}
