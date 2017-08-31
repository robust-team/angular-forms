import { Group } from './group';
import { Question } from '../question';
import { Pattern, Validation } from '../validation';

export class DataTable extends Group {

  public constructor(
    code: string,
    description: string,
    private _questions: Question<any>[][],
    private _validations: Validation[] = []
  ) {
    super(code, description, 'datatable');
  }

  public isRequired(): boolean {
    for (const validation of this._validations) {
      if ('required' === validation.type) {
        return true;
      }
    }

    return false;
  }

  public get questions(): Question<any>[][] {
    return this._questions;
  }

  public get validations(): Validation[] {
    return this._validations;
  }
}
