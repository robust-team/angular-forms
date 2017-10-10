import { Group, GroupType } from '.';
import { Question } from '../question';
import { Pattern, Validation, ValidationType } from '../validation';

export class DataTable extends Group<Question<any>[][]> {

  public constructor(
    code: string,
    description: string,
    questions: Question<any>[][],
    public validations: Validation[] = []
  ) {
    super(code, description, GroupType.DATATABLE, questions);
  }

  public getQuestionByName(name: string): Question<any> {
    for (const question of this.questions[0]) {
      if (question.name === name) {
        return question;
      }
    }
  }

  public getQuestionByNameAndIndex(name: string, index: number): Question<any> {
    const questions: Question<any>[] = this.questions[index];

    if (!questions) {
      return;
    }

    for (const question of questions) {
      if (question.name === name) {
        return question;
      }
    }
  }

  public isRequired(): boolean {
    for (const validation of this.validations) {
      if (ValidationType.REQUIRED === validation.type) {
        return true;
      }
    }

    return false;
  }
}
