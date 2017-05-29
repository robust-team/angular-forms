import { Question } from './question';
import { Validation } from '../validation/validation';

export class Check extends Question {

  public constructor(
    description: string,
    fieldType: string,
    validations: Validation[],
    private _defaultOption: boolean
  ) {
    super(description, fieldType, validations);
  }

  public get defaultOption(): boolean {
    return this._defaultOption;
  }

  public static fromJson(question : Check) : Check {
    return new Check(
      question.description,
      question.fieldType,
      question.validations,
      question.defaultOption
    );
  }
}
