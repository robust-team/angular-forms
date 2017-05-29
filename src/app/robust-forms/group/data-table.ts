import { Group } from './group';
import { Question } from '../question/question';
import { Validation } from '../validation/validation';

export class DataTable extends Group {

  public constructor(
    description: string,
    questions: Array<Question>,
    private _customType: string,
    private _validations: Validation[]
  ) {
    super(description, questions);
  }

  public get customType(): string {
    return this._customType;
  }

  public get validations(): Validation[] {
    return this._validations;
  }
}
