import { Validation, ValidationType } from '.';

export class Required extends Validation {

  public static fromJson(validation: Required): Required {
    return new Required(validation.message, validation.requiredTrue);
  }

  public constructor(
    message: string,
    private _requiredTrue: boolean = false
  ) {
    super(ValidationType.REQUIRED, message);
  }

  public get requiredTrue(): boolean {
    return this._requiredTrue;
  }
}
