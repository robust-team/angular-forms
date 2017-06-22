import { Validation } from '.';

export class Email extends Validation {

  public static fromJson(validation: Email): Email {
    return new Email(validation.type, validation.message);
  }
}
