import { Question } from './question';
import { Validation } from '../validation/validation';

export abstract class Choice extends Question<string> {

  public constructor(
    code: string,
    description: string,
    fieldType: string,
    answer: string = null,
    validations: Validation[] = null,
    private _options: string[] = null,
    private _defaultOption: string = null
  ) {
    super(code, description, fieldType, answer, validations);
  }

  public get options(): string[] {
    return this._options;
  }

  public get defaultOption(): string {
    return this._defaultOption;
  }
}
