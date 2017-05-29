import { Validation } from '../validation/validation';

export abstract class Question {

  public constructor(
    private _description: string,
    private _fieldType: string,
    private _validations: Validation[]
  ) { }

  public get description(): string {
    return this.description;
  }

  public get fieldType(): string {
    return this.fieldType;
  }

  public get validations(): Validation[] {
    return this.validations;
  }

  public abstract fromJson(question : Question) : Question;
}
