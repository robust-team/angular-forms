import { Group } from './group';
import { Question } from '../question';

export class Fieldset extends Group {

  public constructor(
    code: string,
    description: string,
    private _questions: Question<any>[]
  ) {
    super(code, description, 'group');
  }

  public get questions(): Question<any>[] {
    return this._questions;
  }
}
