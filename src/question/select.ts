import { Choice, Dependency, Option, QuestionType } from '.';
import { Validation } from '../validation';
import { ValidationFactory } from '../factory';

export class Select extends Choice {

  public static fromJson(question: Select): Select {
    return new Select(
      question.name,
      question.description,
      question.dependencies,
      question.answer,
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
    answer: string = null,
    validations: Validation[] = [],
    disabled: boolean = false,
    options: Option[] | string[] = [],
    defaultOption: string = null,
    private _editableOption: string = null,
    private _placeholder: string = null
  ) {
    super(name, description, QuestionType.SELECT, dependencies, answer, validations, disabled, options, defaultOption);
  }

  public get editableOption(): string {
    return this._editableOption;
  }

  public get placeholder(): string {
    return this._placeholder;
  }
}
