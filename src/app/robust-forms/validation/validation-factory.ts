import { MinLength, MaxLength, Required, Validation } from '.';

export class ValidationFactory {

  private static readonly types = {
    'max-length': MaxLength,
    'min-length': MinLength,
    'required': Required
  };

  public static create(validation: Validation): Validation {
    return ValidationFactory.types[validation.type].fromJson(validation);
  }
}
