import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { Group } from './group/group';
import { Question } from './question';

export class ReactiveFormsFactory {

  public static createFormGroupFromGroups(groups: Group[]): FormGroup {
    let formGroup: FormGroup = new FormGroup({});

    for (let group of groups) {
      let control: FormGroup|FormArray = 'datatable' !== group.groupType
        ? ReactiveFormsFactory.createFormGroupFromQuestions(group.questions)
        : new FormArray([]);

      formGroup.addControl(group.code, control);
    }

    return formGroup;
  }

  public static createFormGroupFromQuestions(questions: Question[]): FormGroup {
    let formGroup: FormGroup = new FormGroup({});

    for (let question of questions) {
      formGroup.addControl(question.code, new FormControl());
    }

    return formGroup;
  }
}
