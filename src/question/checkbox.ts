import { Dependency, Question, QuestionType } from '.';
import { Validation } from '../validation';
import { ValidationFactory } from '../factory';

export class Checkbox extends Question<boolean> {

  public static fromJson(question: Checkbox): Checkbox {
    return new Checkbox(
      question.name,
      question.description,
      question.dependencies,
      'true' === String(question.answer),
      ValidationFactory.createValidationList(question.validations),
      'true' === String(question.defaultOption)
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[],
    answer: boolean = false,
    validations: Validation[] = [],
    disabled: boolean = false,
    private _defaultOption: boolean = null
  ) {
    super(name, description, QuestionType.CHECKBOX, dependencies || [], answer || false, validations || [], disabled);
  }

  public get defaultOption(): boolean {
    return this._defaultOption;
  }
}
