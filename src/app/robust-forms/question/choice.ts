import { Dependency } from './dependency';
import { Question } from './question';
import { Validation } from '../validation/validation';

export abstract class Choice extends Question<string> {

  public constructor(
    code: string,
    description: string,
    dependencies: Dependency[],
    fieldType: string,
    answer: string = null,
    validations: Validation[] = [],
    private _options: string[] = [],
    private _defaultOption: string = null
  ) {
    super(code, description, dependencies, fieldType, answer, validations || []);
  }

  public get options(): string[] {
    return this._options;
  }

  public get defaultOption(): string {
    return this._defaultOption;
  }
}
