import { Dependency, Option, Question, QuestionType } from '.';
import { Validation } from '../validation';

export abstract class Choice extends Question<string> {

  public constructor(
    name: string,
    description: string,
    type: QuestionType,
    dependencies: Dependency[] = [],
    answer: string = null,
    validations: Validation[] = [],
    disabled: boolean = false,
    protected _options: Option[] | string[] = [],
    protected _defaultOption: string = null
  ) {
    super(name, description, type, dependencies, (answer && !answer.length ? answer : null), validations, disabled);
  }

  public get options(): Option[] | string[] {
    return this._options;
  }

  public get defaultOption(): string {
    return this._defaultOption;
  }
}
