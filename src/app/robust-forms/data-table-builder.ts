import { DataTable, Group, GroupBuilder, Question, Validation } from '.';

export class DataTableBuilder extends GroupBuilder {

  public constructor(
    code: string,
    description: string,
    type: string,
    private customType: string,
    private validations: Validation[] = null,
    private answers: Question<any>[][] = null
  ) {
    super(code, description, type);
  }

  public build(): Group {
    return new DataTable(
      this.code,
      this.description,
      this.type,
      this.questions,
      this.customType,
      this.validations,
      this.answers
    );
  }
}
