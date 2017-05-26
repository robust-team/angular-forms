import { Question } from './question';
import { Validation } from '../validation/validation';

export class DataTable extends Question {

  public constructor(
    description: string,
    questionType: string,
    fieldType: string,
    validations: Validation[],
    private _questions: Question[]
  ) {
    super(description, questionType, fieldType, validations);
  }

  public get questions(): Question[] {
    return this._questions;
  }
}
