import { Question } from '../question';

export abstract class Group {

  public constructor(
    private _code: string,
    private _description: string,
    private _type: string
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
}
