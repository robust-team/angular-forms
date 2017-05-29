import { Choice } from './choice';
import { Validation } from '../validation/validation';

export class Select extends Choice {

  public constructor(
    description: string,
    fieldType: string,
    validations: Validation[],
    options: string[],
    defaultOption: string,
    private _placeholder: string
  ) {
    super(description, fieldType, validations, options, defaultOption);
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public fromJson(question: Select): Select {
    return new Select(
      question.description,
      question.fieldType,
      question.validations,
      question.options,
      question.defaultOption,
      question.placeholder
    );
  }
}
