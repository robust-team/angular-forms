import { Answer, Dependency, Option, Question, QuestionType } from '.';
import { Validation } from '../validation';

export abstract class Choice extends Question<string> {

  public constructor(
    name: string,
    description: string,
    type: QuestionType,
    dependencies: Dependency[] = [],
    answer: Answer<string> | string = null,
    validations: Validation[] = [],
    disabled: boolean = false,
    public options: Option[] | string[] = [],
    public defaultOption: string = null
  ) {
    super(name, description, type, dependencies, answer, validations, disabled);
  }
}
