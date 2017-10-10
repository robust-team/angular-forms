import { Validation, ValidationType } from '.';

export class Required extends Validation {

  public constructor(
    message: string,
    public requiredTrue: boolean = false
  ) {
    super(ValidationType.REQUIRED, message);
  }
}
