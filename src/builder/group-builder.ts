import { Group } from '../group';
import { Question } from '../question';

export abstract class GroupBuilder<QuestionListType> {

  protected questions: QuestionListType;

  public constructor(
    protected code: string,
    protected description: string,
    protected type: string
  ) { }

  public abstract addQuestion<QuestionType>(question: QuestionType): void;

  public abstract build(): Group;
}
