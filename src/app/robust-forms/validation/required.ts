import { Validation } from '.';

export class Required extends Validation {

  public constructor(
    type: string,
    message: string,
    private _requiredTrue: boolean = false
  ) {
    super(type, message);
  }

  public get requiredTrue(): boolean {
    return this._requiredTrue;
  }

  public static fromJson(validation: Required): Required {
    return new Required(validation.type, validation.message, validation.requiredTrue);
  }
}
