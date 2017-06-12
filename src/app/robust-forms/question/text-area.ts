import { Dependency } from './dependency';
import { Question } from './question';
import { Validation } from './../validation/validation';

export class TextArea extends Question<string> {

  public constructor(
    code: string,
    description: string,
    dependencies: Dependency[],
    type: string,
    answer: string = null,
    validations: Validation[] = [],
    private _placeholder: string = null,
  ) {
    super(code, description, dependencies, type, answer, validations || []);
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public static fromJson(question: TextArea): TextArea {
    return new TextArea(
      question.code,
      question.description,
      question.dependencies,
      question.type,
      question.answer,
      question.validations,
      question.placeholder
    );
  }
}
