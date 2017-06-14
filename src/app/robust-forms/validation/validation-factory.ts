import { MinLength, MaxLength, Pattern, Required, Validation } from '.';

export class ValidationFactory {

  private static readonly types = {
    'maxlength': MaxLength,
    'minlength': MinLength,
    'pattern': Pattern,
    'required': Required
  };

  public static create(validation: Validation): Validation {
    return ValidationFactory.types[validation.type].fromJson(validation);
  }
}
