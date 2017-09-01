import { Dependency, QuestionType } from '.';
import { Pattern, Validation, ValidationType } from '../validation';

export abstract class Question<Answer> {

  public constructor(
    private _name: string,
    private _description: string,
    private _type: QuestionType,
    private _dependencies: Dependency[] = [],
    private _answer: Answer = null,
    private _validations: Validation[] = [],
    private _disabled: boolean = false
  ) { }

  public isRequired(): boolean {
    for (const validation of this._validations) {
      if (validation.isRequired()) {
        return true;
      }
    }

    return false;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get type(): QuestionType {
    return this._type;
  }

  public get dependencies(): Dependency[] {
    return this._dependencies;
  }

  public get answer(): Answer {
    return this._answer;
  }

  public get validations(): Validation[] {
    return this._validations;
  }

  public get disabled(): boolean {
    return this._disabled;
  }
}
