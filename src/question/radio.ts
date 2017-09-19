import { Choice, Dependency, Option, QuestionType } from '.';
import { Validation } from '../validation';
import { ValidationFactory } from '../factory';

export class Radio extends Choice {

  public static fromJson(question: Radio): Radio {

    return new Radio(
      question.name,
      question.description,
      question.dependencies,
      question.answer,
      ValidationFactory.createValidationList(question.validations),
      question.disabled,
      question.options,
      question.defaultOption
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[] = [],
    answer: string = null,
    validations: Validation[] = [],
    disabled: boolean = false,
    options: Option[] | string[] = [],
    defaultOption: string = null
  ) {
    super(name, description, QuestionType.RADIO, dependencies, answer, validations, disabled, options, defaultOption);
  }
}
