import { Question } from './..';

export class Group {

  public constructor(
    private _code: string,
    private _description: string,
    private _questions: Array<Question>
  ) { }

  public get code(): string {
    return this._code;
  }

  public get description(): string {
    return this._description;
  }

  public get questions(): Array<Question> {
    return this._questions;
  }
}
