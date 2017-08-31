import { GroupType } from '.';
import { Question } from '../question';

export abstract class Group {

  public constructor(
    private _code: string,
    private _description: string,
    private _type: GroupType
  ) { }

  public get code(): string {
    return this._code;
  }

  public get description(): string {
    return this._description;
  }

  public get type(): GroupType {
    return this._type;
  }
}
