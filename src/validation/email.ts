import { Validation, ValidationType } from '.';

export class Email extends Validation {

  public constructor(message: string) {
    super(ValidationType.EMAIL, message);
  }
}
