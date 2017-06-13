import { Dependency, Question } from '.';
import { Validation } from '../validation';

export abstract class Choice extends Question<string> {

  public constructor(
    code: string,
    description: string,
    dependencies: Dependency[],
    type: string,
    answer: string = null,
    validations: Validation[] = [],
    private _options: string[] = [],
    private _defaultOption: string = null
  ) {
    super(code, description, dependencies, type, answer, validations || []);
  }

  public get options(): string[] {
    return this._options;
  }

  public get defaultOption(): string {
    return this._defaultOption;
  }
}
