import { Validation, ValidationType } from '.';

export class Email extends Validation {

  public static fromJson(validation: Email): Email {
    return new Email(validation.message);
  }

  public constructor(message: string) {
    super(ValidationType.EMAIL, message);
  }
}
