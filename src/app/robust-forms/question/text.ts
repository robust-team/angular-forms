import { Question } from './question';
import { Validation } from './../validation/validation';

export class Text extends Question {

  public constructor(
    description: string,
    fieldType: string,
    validations: Validation[],
    private _mask: string,
    private _placeholder: string
  ) {
    super(description, fieldType, validations);
  }

  public get mask(): string {
    return this._mask;
  }

  public get placeholder(): string {
    return this._placeholder;
  }
}
