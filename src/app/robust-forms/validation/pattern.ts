import { Validation } from '.';

export class Pattern extends Validation {

  public constructor(
    validationType: string,
    message: string,
    private _regex: string
  ) {
    super(validationType, message);
  }

  public get regex(): string {
    return this._regex;
  }

  public static fromJson(validation: Pattern): Pattern {
    return new Pattern(validation.validationType, validation.message, validation.regex);
  }
}
