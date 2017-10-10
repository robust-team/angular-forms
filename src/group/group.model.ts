import { GroupType } from '.';
import { Question } from '../question';

export abstract class Group<QuestionListType> {

  public constructor(
    public code: string,
    public description: string,
    public type: GroupType,
    public questions: QuestionListType
  ) { }
}
