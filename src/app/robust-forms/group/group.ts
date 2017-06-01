import { Question } from './..';

export class Group {

  public constructor(
    private _code: string,
    private _description: string,
    private _groupType: string,
    private _questions: Question<any>[]
  ) { }

  public get code(): string {
    return this._code;
  }

  public get description(): string {
    return this._description;
  }

  public get groupType(): string {
    return this._groupType;
  }

  public get questions(): Question<any>[] {
    return this._questions;
  }
}
