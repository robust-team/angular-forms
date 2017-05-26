import { Question } from './../question/question';

export class Group {

  public constructor(
    private _description: string,
    private _questions: Question[]
  ) { }

  public get description(): string {
    return this._description;
  }

  public get questions(): Question[] {
    return this._questions;
  }
}
