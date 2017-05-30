import { Question } from './question';
import { Validation } from './../validation/validation';

export class Text extends Question {

  public constructor(
    code: string,
    description: string,
    fieldType: string,
    validations: Validation[],
    private _mask: string = '',
    private _placeholder: string = ''
  ) {
    super(code, description, fieldType, validations || []);
  }

  public get mask(): string {
    return this._mask;
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public static fromJson(question : Text) : Question {0
    return new Text(
      question.code,
      question.description,
      question.fieldType,
      question.validations ,
      question.mask,
      question.placeholder
    );
  }
}
