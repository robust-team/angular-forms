import { Email, Max, MaxLength, Min, MinLength, Pattern, Required, Validation, ValidationType } from '../validation';

export class ValidationFactory {

  public static createValidation(validation: Validation): Validation {
    switch (validation.type) {
      case ValidationType.EMAIL:
        return new Email(validation.message);
      case ValidationType.MAX:
        return new Max(validation.message, (<Max>validation).value);
      case ValidationType.MAX_LENGTH:
        return new MaxLength(validation.message, (<MaxLength>validation).value);
      case ValidationType.MIN:
        return new Min(validation.message, (<Min>validation).value);
      case ValidationType.MIN_LENGTH:
        return new MinLength(validation.message, (<MinLength>validation).value);
      case ValidationType.PATTERN:
        return new Pattern(validation.message, (<Pattern>validation).value);
      case ValidationType.REQUIRED:
        return new Required(validation.message);
    }
  }

  public static createValidationList(validationList: Validation[]): Validation[] {
    return validationList.map((validation: Validation) => ValidationFactory.createValidation(validation));
  }
}
