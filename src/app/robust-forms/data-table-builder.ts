import { DataTable, Group, GroupBuilder, Question, Validation } from '.';

export class DataTableBuilder extends GroupBuilder {

  public constructor(
    code: string,
    description: string,
    groupType: string,
    private customType: string,
    private validations: Validation[] = null,
    private answers: Question[][] = null
  ) {
    super(code, description, groupType);
  }

  public build(): Group {
    return new DataTable(
      this.code,
      this.description,
      this.groupType,
      this.questions,
      this.customType,
      this.validations,
      this.answers
    );
  }
}
