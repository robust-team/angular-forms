import { Dependency, Question, QuestionType } from '.';
import { Validation } from '../validation';
import { ValidationFactory } from '../factory';

export class TextArea extends Question<string> {

  public static fromJson(question: TextArea): TextArea {
    return new TextArea(
      question.name,
      question.description,
      question.dependencies,
      question.answer,
      ValidationFactory.createValidationList(question.validations),
      question.disabled,
      question.placeholder
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[] = [],
    answer: string = null,
    validations: Validation[] = [],
    disabled: boolean = false,
    private _placeholder: string = null,
  ) {
    super(name, description, QuestionType.TEXTAREA, dependencies, answer, validations, disabled);
  }

  public get placeholder(): string {
    return this._placeholder;
  }
}
