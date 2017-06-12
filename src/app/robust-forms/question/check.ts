import { Dependency } from './dependency';
import { Question } from './question';
import { Validation } from '../validation/validation';

export class Check extends Question<boolean> {

  public constructor(
    code: string,
    description: string,
    dependencies: Dependency[],
    type: string,
    answer: boolean = false,
    validations: Validation[] = [],
    private _defaultOption: boolean = null
  ) {
    super(code, description, dependencies, type, answer || false, validations || []);
  }

  public get defaultOption(): boolean {
    return this._defaultOption;
  }

  public static fromJson(question : Check): Check {
    return new Check(
      question.code,
      question.description,
      question.dependencies,
      question.type,
      question.answer,
      question.validations,
      question.defaultOption
    );
  }
}
