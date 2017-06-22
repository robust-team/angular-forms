import { Validation } from '.';

export class Pattern extends Validation {

  public static fromJson(validation: Pattern): Pattern {
    return new Pattern(validation.type, validation.message, validation.regex);
  }

  public constructor(
    type: string,
    message: string,
    private _regex: string
  ) {
    super(type, message);
  }

  public get regex(): string {
    return this._regex;
  }
}
