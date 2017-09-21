import { FormGroup, FormControl } from '@angular/forms';

import { Dependency, DependencyCriteria, Question } from '.';
import { StringUtils } from '../util';

export class DependencyService {

  public static hideQuestion(question: Question<any>, formGroup: FormGroup): boolean {
    if (!question.dependencies || 0 === question.dependencies.length) {
      return false;
    }

    for (const dependency of question.dependencies) {
      if (!formGroup.get(dependency.code)) {
        continue;
      }

      const answerDependency: string = formGroup.get(dependency.code).value;
      const result: boolean = DependencyService.executeOperation(answerDependency, dependency);

      if (!result) {
        DependencyService.setStatusFormControl(<FormControl> formGroup.get(question.name), true);

        return true;
      }
    }

    DependencyService.setStatusFormControl(<FormControl> formGroup.get(question.name), false);

    return false;
  }

  private static executeOperation(answerDependency: string, dependency: Dependency): boolean {
    switch (dependency.criteria) {
      case DependencyCriteria.EQUALS:
        return StringUtils.convertToString(answerDependency) === StringUtils.convertToString(dependency.expectedAnswer);
      case DependencyCriteria.LESS_THAN:
        return parseFloat(answerDependency) < parseFloat(dependency.expectedAnswer);
      case DependencyCriteria.GREATER_THAN:
        return parseFloat(answerDependency) > parseFloat(dependency.expectedAnswer);
      case DependencyCriteria.NOT_EQUALS:
        return StringUtils.convertToString(answerDependency) !== StringUtils.convertToString(dependency.expectedAnswer);
    }

    return false;
  }

  private static setStatusFormControl(formControl: FormControl, hidden: boolean): void {
    if (hidden) {
      formControl.disable();
    } else {
      formControl.enable();
    }
  }
}
