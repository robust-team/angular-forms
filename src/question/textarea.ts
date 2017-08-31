import { Dependency, Question, QuestionType } from '.';
import { Validation } from '../validation';

export class TextArea extends Question<string> {

  public static fromJson(question: TextArea): TextArea {
    return new TextArea(
      question.name,
      question.description,
      question.dependencies,
      question.answer,
      question.validations,
      question.placeholder
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[],
    answer: string = null,
    validations: Validation[] = [],
    private _placeholder: string = null,
  ) {
    super(name, description, QuestionType.TEXTAREA, dependencies || [], answer, validations || []);
  }

  public get placeholder(): string {
    return this._placeholder;
  }
}
