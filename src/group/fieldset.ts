import { Group, GroupType } from '.';
import { Question } from '../question';

export class Fieldset extends Group<Question<any>[]> {

  public constructor(
    code: string,
    description: string,
    questions: Question<any>[]
  ) {
    super(code, description, GroupType.FIELDSET, questions);
  }

  public getQuestionByName(name: string): Question<any> {
    for (const question of this._questions) {
      if (question.name === name) {
        return question;
      }
    }
  }
}
