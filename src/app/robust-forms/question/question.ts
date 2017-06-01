import { Validation } from '../validation';

export abstract class Question<Answer> {

  public constructor(
    private _code: string,
    private _description: string,
    private _fieldType: string,
    private _answer: Answer = null,
    private _validations: Validation[] = []
  ) { }

  public get code(): string {
    return this._code;
  }

  public get description(): string {
    return this._description;
  }

  public get fieldType(): string {
    return this._fieldType;
  }

  public get answer(): Answer {
    return this._answer;
  }

  public get validations(): Validation[] {
    return this._validations;
  }
}
