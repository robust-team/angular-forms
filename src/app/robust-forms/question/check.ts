import { Question } from './question';
import { Validation } from '../validation/validation';

export class Check extends Question<boolean> {

  public constructor(
    code: string,
    description: string,
    fieldType: string,
    answer: boolean = null,
    validations: Validation[] = null,
    private _defaultOption: boolean = null
  ) {
    super(code, description, fieldType, answer, validations);
  }

  public get defaultOption(): boolean {
    return this._defaultOption;
  }

  public static fromJson(question : Check) : Check {
    return new Check(
      question.code,
      question.description,
      question.fieldType,
      question.answer,
      question.validations,
      question.defaultOption
    );
  }
}
