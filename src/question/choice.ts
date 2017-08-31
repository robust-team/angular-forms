import { Dependency, Question, QuestionType } from '.';
import { Validation } from '../validation';

export abstract class Choice extends Question<string> {

  public constructor(
    name: string,
    description: string,
    type: QuestionType,
    dependencies: Dependency[],
    answer: string = null,
    validations: Validation[] = [],
    private _options: string[] = [],
    private _defaultOption: string = null
  ) {
    super(name, description, type, dependencies || [], answer, validations || []);
  }

  public get options(): string[] {
    return this._options;
  }

  public get defaultOption(): string {
    return this._defaultOption;
  }
}
