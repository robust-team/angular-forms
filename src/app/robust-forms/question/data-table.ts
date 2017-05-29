import { Question } from './question';
import { Validation } from '../validation/validation';

export class DataTable extends Question {

  public constructor(
    description: string,
    fieldType: string,
    validations: Validation[],
    private _questionType: string,
    private _questions: Question[]
  ) {
    super(description, fieldType, validations);
  }

  public get questionType(): string {
    return this._questionType;
  }

  public get questions(): Question[] {
    return this._questions;
  }

  public fromJson(question : DataTable) : DataTable {
    return new DataTable(
      question.description,
      question.fieldType,
      question.validations,
      question.questionType,
      question.questions
    );
  }
}
