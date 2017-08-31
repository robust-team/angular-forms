import { Validation } from '.';

export class Required extends Validation {

  public static fromJson(validation: Required): Required {
    return new Required(validation.message, validation.requiredTrue);
  }

  public constructor(
    message: string,
    private _requiredTrue: boolean = false
  ) {
    super('required', message);
  }

  public get requiredTrue(): boolean {
    return this._requiredTrue;
  }
}
