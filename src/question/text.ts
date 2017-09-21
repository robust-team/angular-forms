import { Dependency, Question, QuestionType } from '.';
import { Validation } from '../validation';
import { ValidationFactory } from '../factory';

export class Text extends Question<string> {

  public static fromJson(question: Text): Text {
    return new Text(
      question.name,
      question.description,
      question.dependencies,
      question.answer,
      ValidationFactory.createValidationList(question.validations),
      question.disabled,
      question.mask,
      question.placeholder,
      question.tooltip
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[] = [],
    answer: string = null,
    validations: Validation[] = [],
    disabled: boolean = false,
    private _mask: string = null,
    private _placeholder: string = null,
    private _tooltip: string = null,
  ) {
    super(name, description, QuestionType.TEXT, dependencies, answer, validations, disabled);
  }

  public get mask(): string {
    return this._mask;
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public get tooltip(): string {
    return this._tooltip;
  }
}
