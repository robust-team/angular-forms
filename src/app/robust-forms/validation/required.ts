import { Validation } from '.';

export class Required extends Validation {

  public static fromJson(validation: Required): Required {
    return new Required(validation.validationType, validation.message);
  }
}
