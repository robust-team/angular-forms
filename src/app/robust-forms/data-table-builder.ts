import { GroupBuilder } from '.';
import { DataTable, Group } from './group';
import { Question } from './question';
import { Validation } from './validation';

export class DataTableBuilder extends GroupBuilder {

  public constructor(
    code: string,
    description: string,
    type: string,
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
      this.validations,
      this.answers
    );
  }
}
