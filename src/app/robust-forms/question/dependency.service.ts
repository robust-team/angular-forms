import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Question, Dependency } from '..';

@Injectable()
export class DependencyService {

  public hideQuestion(question: Question<any>, formGroup: FormGroup): boolean {
    if (!question.dependencies) {
      return false;
    }

    for (const dependency of question.dependencies) {
      const answerDependency: string = formGroup.get(dependency.code).value;
      const result: boolean = this.executeOperation(answerDependency, dependency);

      if (!result) {
        return true;
      }
    }

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
}
