import { Answer, Dependency, QuestionType } from '.';
import { Pattern, Validation, ValidationType } from '../validation';

export abstract class Question<AnswerType> {

  public constructor(
    public name: string,
    public description: string,
    public type: QuestionType,
    public dependencies: Dependency[] = [],
    public answer: Answer<AnswerType> | AnswerType = null,
    public validations: Validation[] = [],
    public disabled: boolean = false
  ) { }

  public isRequired(): boolean {
    for (const validation of this.validations) {
      if (validation.isRequired()) {
        return true;
      }
    }

    return false;
  }
}
