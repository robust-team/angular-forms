import { Validation, ValidationType } from '.';

export class Max extends Validation {

  public constructor(
    message: string,
    public value: number
  ) {
    super(ValidationType.MAX, message);
  }
}
