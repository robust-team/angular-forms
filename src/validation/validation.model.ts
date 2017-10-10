import { ValidationType } from '.';

export abstract class Validation {

  public constructor(
    public type: ValidationType,
    public message: string
  ) { }

  public isRequired(): boolean {
    return ValidationType.REQUIRED === this.type;
  }
}
