import { Dependency, Question } from '.';
import { Validation } from '../validation';

export class Check extends Question<boolean> {

  public static fromJson(question: Check): Check {
    return new Check(
      question.name,
      question.description,
      question.dependencies,
      question.type,
      question.answer,
      question.validations,
      question.defaultOption
    );
  }

  public constructor(
    name: string,
    description: string,
    dependencies: Dependency[],
    type: string,
    answer: boolean = false,
    validations: Validation[] = [],
    private _defaultOption: boolean = null
  ) {
    super(name, description, dependencies, type, answer || false, validations || []);
  }

  public get defaultOption(): boolean {
    return this._defaultOption;
  }
}
