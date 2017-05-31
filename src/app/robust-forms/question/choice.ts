import { Question } from './question';
import { Validation } from '../validation/validation';

export abstract class Choice extends Question {

  public constructor(
    code: string,
    description: string,
    fieldType: string,
    validations: Validation[],
    private _options: string[],
    private _defaultOption: string,
    private _answer: string = null
  ) {
    super(code, description, fieldType, validations);
  }

  public get options(): string[] {
    return this._options;
  }

  public get defaultOption(): string {
    return this._defaultOption;
  }

  public get answer(): string {
    return this._answer;
  }
}
