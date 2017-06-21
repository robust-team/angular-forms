export class ValidationTypeNotFoundError implements Error {

  private _name: string = 'ValidationTypeNotFoundError';

  public constructor(private _message: string = 'Validation Type not found.') { }

  public get name(): string {
    return this._name;
  }

  public get message(): string {
    return this._message;
  }
}
