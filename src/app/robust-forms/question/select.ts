import { Choice } from '.';
import { Validation } from '../validation';

export class Select extends Choice {

  public constructor(
    code: string,
    description: string,
    fieldType: string,
    answer: string = null,
    validations: Validation[] = [],
    options: string[] = [],
    defaultOption: string = null,
    private _placeholder: string = null
  ) {
    super(code, description, fieldType, answer, validations, options, defaultOption);
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public static fromJson(question: Select): Select {
    return new Select(
      question.code,
      question.description,
      question.fieldType,
      question.answer,
      question.validations,
      question.options,
      question.defaultOption,
      question.placeholder
    );
  }
}
