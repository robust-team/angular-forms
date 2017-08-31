import { Group, GroupType } from '.';
import { Question } from '../question';
import { Pattern, Validation, ValidationType } from '../validation';

export class DataTable extends Group {

  public constructor(
    code: string,
    description: string,
    private _questions: Question<any>[][],
    private _validations: Validation[] = []
  ) {
    super(code, description, GroupType.DATATABLE);
  }

  public isRequired(): boolean {
    for (const validation of this._validations) {
      if (ValidationType.REQUIRED === validation.type) {
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
