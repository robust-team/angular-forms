import { Answer, Dependency, Question, QuestionType } from '.';
import { Validation } from '../validation';
import { AnswerFactory, QuestionFactory, ValidationFactory } from '../factory';

export class Checkbox extends Question<boolean> {

  public static fromJson(question: Checkbox): Checkbox {
    const booleanAnswer: boolean = 'true' === String(question.answer);
    'object' === typeof question.answer
      ? question.answer.value = booleanAnswer
      : question.answer = booleanAnswer;

    return new Checkbox(
      question.name,
      question.description,
      question.dependencies,
      AnswerFactory.create<boolean>(question.answer),
      ValidationFactory.createValidationList(question.validations),
      'true' === String(question.defaultOption)
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[] = [],
    answer: Answer<boolean> | boolean = false,
    validations: Validation[] = [],
    disabled: boolean = false,
    public defaultOption: boolean = null
  ) {
    super(name, description, QuestionType.CHECKBOX, dependencies, answer || false, validations, disabled);
  }
}
