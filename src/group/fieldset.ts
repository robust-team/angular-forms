import { Group } from './group';
import { Question } from '../question';

export class Fieldset extends Group {

  public constructor(
    code: string,
    description: string,
    type: string,
    private _questions: Question<any>[]
  ) {
    super(code, description, type);
  }

  public get questions(): Question<any>[] {
    return this._questions;
  }
}
