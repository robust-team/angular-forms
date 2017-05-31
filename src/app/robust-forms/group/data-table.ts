import { Group } from './group';
import { Question } from '../question/question';
import { Validation } from '../validation/validation';

export class DataTable extends Group {

  public constructor(
    code: string,
    description: string,
    groupType: string,
    questions: Array<Question>,
    private _customType: string,
    private _validations: Validation[]
  ) {
    super(code, description, groupType, questions);
  }

  public get customType(): string {
    return this._customType;
  }

  public get validations(): Validation[] {
    return this._validations;
  }
}
