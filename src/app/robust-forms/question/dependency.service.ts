import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Question, Dependency } from '..';

@Injectable()
export class DependencyService {

  public hideQuestion(question: Question<any>, formGroup: FormGroup): boolean {
    if (!question.dependencies) {
      this.setStatusFormControl(<FormControl> formGroup.get(question.code), false);

      return false;
    }

    for (const dependency of question.dependencies) {
      const answerDependency: string = formGroup.get(dependency.code).value;
      const result: boolean = this.executeOperation(answerDependency, dependency);

      if (!result) {
        this.setStatusFormControl(<FormControl> formGroup.get(question.code), true);

        return true;
      }
    }

    this.setStatusFormControl(<FormControl> formGroup.get(question.code), false);

    return false;
  }

  private executeOperation(answerDependency: string, dependency: Dependency): boolean {
    const operations: { [type: string]: boolean } = {
      'equals': answerDependency === dependency.expectedAnswer,
      'lower': parseFloat(answerDependency) < parseFloat(dependency.expectedAnswer),
      'greater': parseFloat(answerDependency) > parseFloat(dependency.expectedAnswer),
      'different': answerDependency !== dependency.expectedAnswer
    };

    return operations[dependency.criteria];
  }

  private setStatusFormControl(formControl: FormControl, hidden: boolean) {
    if (hidden && formControl.enabled) {
      formControl.disable();
    } else if (!hidden && formControl.disabled) {
      formControl.enable();
    }
  }
}
