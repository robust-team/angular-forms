import { Question } from './..';

export class Group {

  public constructor(
    private _code: string,
    private _description: string,
    private _type: string,
    private _questions: Question<any>[]
  ) { }

  public get code(): string {
    return this._code;
  }

  public get description(): string {
    return this._description;
  }

  public get type(): string {
    return this._type;
  }

  public get questions(): Question<any>[] {
    return this._questions;
  }
}
