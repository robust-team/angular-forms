import { Group } from './group';
import { Question } from '../question/question';
import { Validation } from '../validation/validation';

export class DataTable extends Group {

  public constructor(
    code: string,
    description: string,
    type: string,
    questions: Question<any>[],
    private _customType: string,
    private _validations: Validation[],
    private _answers: Question<any>[][]
  ) {
    super(code, description, type, questions);
  }

  public get customType(): string {
    return this._customType;
  }

  public get validations(): Validation[] {
    return this._validations;
  }

  public get answers(): Question<any>[][] {
    return this._answers;
  }
}
