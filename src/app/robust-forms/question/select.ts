import { Choice } from './choice';
import { Validation } from '../validation/validation';

export class Select extends Choice {

  public constructor(
    code: string,
    description: string,
    fieldType: string,
    validations: Validation[],
    options: string[],
    defaultOption: string,
    private _placeholder: string
  ) {
    super(code, description, fieldType, validations, options, defaultOption);
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public static fromJson(question: Select): Select {
    return new Select(
      question.code,
      question.description,
      question.fieldType,
      question.validations,
      question.options,
      question.defaultOption,
      question.placeholder
    );
  }
}
