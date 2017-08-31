import { Dependency, Question, QuestionType } from '.';
import { Validation } from '../validation';

export class Checkbox extends Question<boolean> {

  public static fromJson(question: Checkbox): Checkbox {
    return new Checkbox(
      question.name,
      question.description,
      question.dependencies,
      'true' === String(question.answer),
      question.validations,
      'true' === String(question.defaultOption)
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[],
    answer: boolean = false,
    validations: Validation[] = [],
    private _defaultOption: boolean = null
  ) {
    super(name, description, QuestionType.CHECKBOX, dependencies || [], answer || false, validations || []);
  }

  public get defaultOption(): boolean {
    return this._defaultOption;
  }
}
