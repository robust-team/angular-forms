import { Group } from '../group';
import { Question } from '../question';

export abstract class GroupBuilder<QuestionListType> {

  protected questions: QuestionListType[];

  public constructor(
    protected code: string,
    protected description: string
  ) { }

  public abstract addQuestion(question: QuestionListType): void;

  public abstract build(): Group;
}
