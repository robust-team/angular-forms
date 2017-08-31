import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Dependency, DependencyCriteria, Question } from '.';
import { StringUtils } from '../util';

@Injectable()
export class DependencyService {

  public hideQuestion(question: Question<any>, formGroup: FormGroup): boolean {
    if (!question.dependencies || 0 === question.dependencies.length) {
      return false;
    }

    for (const dependency of question.dependencies) {
      if (!formGroup.get(dependency.code)) {
        continue;
      }

      const answerDependency: string = formGroup.get(dependency.code).value;
      const result: boolean = this.executeOperation(answerDependency, dependency);

      if (!result) {
        this.setStatusFormControl(<FormControl> formGroup.get(question.name), true);

        return true;
      }
    }

    this.setStatusFormControl(<FormControl> formGroup.get(question.name), false);

    return false;
  }

  private executeOperation(answerDependency: string, dependency: Dependency): boolean {
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

  private setStatusFormControl(formControl: FormControl, hidden: boolean): void {
    if (hidden) {
      formControl.disable();
    } else {
      formControl.enable();
    }
  }
}
