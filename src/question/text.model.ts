import { Answer, Dependency, Question, QuestionType } from '.';
import { Validation } from '../validation';
import { AnswerFactory, ValidationFactory } from '../factory';

export class Text extends Question<string> {

  public static fromJson(question: Text): Text {
    return new Text(
      question.name,
      question.description,
      question.dependencies,
      AnswerFactory.create<string>(question.answer),
      ValidationFactory.createValidationList(question.validations),
      question.disabled,
      question.mask,
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
    public mask: string = null,
    public placeholder: string = null,
  ) {
    super(name, description, QuestionType.TEXT, dependencies, answer, validations, disabled);
  }
}
