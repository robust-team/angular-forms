import { Choice, Dependency, QuestionType } from '.';
import { Validation } from '../validation';

export class Radio extends Choice {

  public static fromJson(question: Radio): Radio {

    return new Radio(
      question.name,
      question.description,
      question.dependencies,
      question.answer,
      question.validations,
      question.options,
      question.defaultOption
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[] = [],
    answer: string = null,
    validations: Validation[] = [],
    options: string[] = [],
    defaultOption: string = null
  ) {
    super(name, description, QuestionType.RADIO, dependencies || [], answer, validations || [], options || [], defaultOption);
  }
}
