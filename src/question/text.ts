import { Dependency, Question, QuestionType } from '.';
import { Validation } from '../validation';

export class Text extends Question<string> {

  public static fromJson(question: Text): Text {
    return new Text(
      question.name,
      question.description,
      question.dependencies,
      question.answer,
      question.validations,
      question.mask,
      question.placeholder
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[],
    answer: string = null,
    validations: Validation[] = [],
    private _mask: string = null,
    private _placeholder: string = null,
  ) {
    super(name, description, QuestionType.TEXT, dependencies || [], answer, validations || []);
  }

  public get mask(): string {
    return this._mask;
  }

  public get placeholder(): string {
    return this._placeholder;
  }
}
