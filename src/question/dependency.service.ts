import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Dependency, Question } from '.';
import { String as StringUtil } from '../util';

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
    const operations: { [type: string]: boolean } = {
      'equals': StringUtil.convertToString(answerDependency, false) === StringUtil.convertToString(dependency.expectedAnswer, false),
      'lessthan': parseFloat(answerDependency) < parseFloat(dependency.expectedAnswer),
      'greaterthan': parseFloat(answerDependency) > parseFloat(dependency.expectedAnswer),
      'notequals': StringUtil.convertToString(answerDependency, false) !== StringUtil.convertToString(dependency.expectedAnswer, false)
    };

    return operations[dependency.criteria];
  }

  private setStatusFormControl(formControl: FormControl, hidden: boolean): void {
    if (hidden) {
      formControl.disable();
    } else {
      formControl.enable();
    }
  }
}
