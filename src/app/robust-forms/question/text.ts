import { Question } from './question';
import { Validation } from './../validation/validation';

export class Text extends Question {

  public constructor(
    code: string,
    description: string,
    fieldType: string,
    validations: Validation[],
    private _mask: string = null,
    private _placeholder: string = null,
    private _answer: string = null
  ) {
    super(code, description, fieldType, validations || []);
  }

  public get mask(): string {
    return this._mask;
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public get answer(): string {
    return this._answer;
  }

  public static fromJson(question : Text) : Question {
    return new Text(
      question.code,
      question.description,
      question.fieldType,
      question.validations,
      question.mask,
      question.placeholder,
      question.answer
    );
  }
}
