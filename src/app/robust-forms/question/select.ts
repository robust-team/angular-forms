import { Dependency } from './dependency';
import { Choice } from '.';
import { Validation } from '../validation';

export class Select extends Choice {

  public constructor(
    code: string,
    description: string,
    dependencies: Dependency[],
    type: string,
    answer: string = null,
    validations: Validation[] = [],
    options: string[] = [],
    defaultOption: string = null,
    private _placeholder: string = null
  ) {
    super(code, description, dependencies, type, answer, validations, options, defaultOption);
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public static fromJson(question: Select): Select {
    return new Select(
      question.code,
      question.description,
      question.dependencies,
      question.type,
      question.answer,
      question.validations,
      question.options,
      question.defaultOption,
      question.placeholder
    );
  }
}
