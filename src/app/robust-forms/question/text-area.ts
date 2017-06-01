import { Question } from './question';
import { Validation } from './../validation/validation';

export class TextArea extends Question<string> {

  public constructor(
    code: string,
    description: string,
    fieldType: string,
    answer: string = null,
    validations: Validation[] = [],
    private _placeholder: string = null,
  ) {
    super(code, description, fieldType, answer, validations || []);
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public static fromJson(question: TextArea): TextArea {
    return new TextArea(
      question.code,
      question.description,
      question.fieldType,
      question.answer,
      question.validations,
      question.placeholder
    );
  }
}
