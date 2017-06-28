import { GroupBuilder } from '.';
import { DataTable } from '../group';
import { Question } from '../question';
import { Validation } from '../validation';

export class DataTableBuilder extends GroupBuilder<Question<any>[][]> {

  public constructor(
    code: string,
    description: string,
    type: string,
    private validations: Validation[] = null
  ) {
    super(code, description, type);
    this.questions = [];
  }

  public addQuestion(question: Question<any>[]): void {
    this.questions.push(question);
  }

  public build(): DataTable {
    return new DataTable(
      this.code,
      this.description,
      this.type,
      this.questions,
      this.validations
    );
  }
}
