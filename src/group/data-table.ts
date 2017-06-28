import { Group } from './group';
import { Question } from '../question';
import { Validation } from '../validation';

export class DataTable extends Group {

  public constructor(
    code: string,
    description: string,
    type: string,
    private _questions: Question<any>[][],
    private _validations: Validation[] = []
  ) {
    super(code, description, type);
  }

  public get questions(): Question<any>[][] {
    return this._questions;
  }

  public get validations(): Validation[] {
    return this._validations;
  }
}
