import { Validation } from '.';

export class Email extends Validation {

  public static fromJson(validation: Email): Email {
    return new Email(validation.message);
  }

  public constructor(message: string) {
    super('email', message);
  }
}
