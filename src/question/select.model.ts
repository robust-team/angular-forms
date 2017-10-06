import { Answer, Choice, Dependency, Option, QuestionType } from '.';
import { Validation } from '../validation';
import { AnswerFactory, ValidationFactory } from '../factory';

export class Select extends Choice {

  public static fromJson(question: Select): Select {
    return new Select(
      question.name,
      question.description,
      question.dependencies,
      AnswerFactory.create<string>(question.answer),
      ValidationFactory.createValidationList(question.validations),
      question.disabled,
      question.options,
      question.defaultOption,
      question.editableOption,
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
    options: Option[] | string[] = [],
    defaultOption: string = null,
    public editableOption: string = null,
    public placeholder: string = null
  ) {
    super(name, description, QuestionType.SELECT, dependencies, answer, validations, disabled, options, defaultOption);
  }
}
