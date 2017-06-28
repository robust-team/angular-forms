import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Dependency, Question } from '.';

@Injectable()
export class DependencyService {

  public hideQuestion(question: Question<any>, formGroup: FormGroup): boolean {
    if (!question.dependencies) {
      return false;
    }

    for (const dependency of question.dependencies) {
      const answerDependency: string = formGroup.get(dependency.name).value;
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
      'equals': answerDependency === dependency.expectedAnswer,
      'lessthan': parseFloat(answerDependency) < parseFloat(dependency.expectedAnswer),
      'greaterthan': parseFloat(answerDependency) > parseFloat(dependency.expectedAnswer),
      'notequals': answerDependency !== dependency.expectedAnswer
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
