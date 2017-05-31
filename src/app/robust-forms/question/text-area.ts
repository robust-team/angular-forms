import { Question } from './question';
import { Validation } from './../validation/validation';

export class TextArea extends Question {

  public constructor(
    code: string,
    description: string,
    fieldType: string,
    validations: Validation[],
    private _placeholder: string = ''
  ) {
    super(code, description, fieldType, validations || []);
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public static fromJson(question : TextArea) : Question {
    return new TextArea(
      question.code,
      question.description,
      question.fieldType,
      question.validations ,
      question.placeholder
    );
  }
}
