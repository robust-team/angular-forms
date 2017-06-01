import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { Group } from './group';
import { Question } from './question';

export class ReactiveFormsFactory {

  public static createFormGroupFromGroups(groups: Group[]): FormGroup {
    let formGroup: FormGroup = new FormGroup({});

    for (let group of groups) {
      let control: FormGroup|FormArray = 'datatable' !== group.groupType
        ? ReactiveFormsFactory.createFormGroupFromQuestions(group.questions)
        : ReactiveFormsFactory.createFormArray(group['answers']);

      formGroup.addControl(group.code, control);
    }

    return formGroup;
  }

  public static createFormGroupFromQuestions(questions: Question[]): FormGroup {
    let formGroup: FormGroup = new FormGroup({});

    for (let question of questions) {
      formGroup.addControl(question.code, new FormControl(question['answer']));
    }

    return formGroup;
  }

  public static createFormArray(answers: Question[][] = null): FormArray {
    let formArray: FormArray = new FormArray([]);

    return formArray;
  }
}
