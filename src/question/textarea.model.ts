import { Answer, Dependency, Question, QuestionType } from '.';
import { Validation } from '../validation';
import { AnswerFactory, ValidationFactory } from '../factory';

export class TextArea extends Question<string> {

  public static fromJson(question: TextArea): TextArea {
    return new TextArea(
      question.name,
      question.description,
      question.dependencies,
      AnswerFactory.create<string>(question.answer),
      ValidationFactory.createValidationList(question.validations),
      question.disabled,
      question.placeholder
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[] = [],
    answer: Answer<string> | string = null,
    validations: Validation[] = [],
    disabled: boolean = false,
    public placeholder: string = null,
  ) {
    super(name, description, QuestionType.TEXTAREA, dependencies, answer, validations, disabled);
  }
}
