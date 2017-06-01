import { FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';

import { DataTable, Group, Question, Validation, MinLength, MaxLength } from '.';

export class ReactiveFormsFactory {

  public static createFormGroupFromGroups(groups: Group[]): FormGroup {
    let formGroup: FormGroup = new FormGroup({});

    for (let group of groups) {
      let control: FormGroup|FormArray = 'datatable' !== group.groupType
        ? ReactiveFormsFactory.createFormGroupFromQuestions(group.questions)
        : ReactiveFormsFactory.createFormArray((<DataTable> group).answers);

      formGroup.addControl(group.code, control);
    }

    return formGroup;
  }

  public static createFormGroupFromQuestions(questions: Question<any>[]): FormGroup {
    let formGroup: FormGroup = new FormGroup({});

    for (let question of questions) {
      let validators: ValidatorFn[] = ReactiveFormsFactory.createValidators(question.validations);
      formGroup.addControl(question.code, new FormControl(question.answer, validators));
    }

    return formGroup;
  }

  public static createFormArray(answers: Question<any>[][] = null): FormArray {
    let formArray: FormArray = new FormArray([]);

    if (answers) {
      for (let answer of answers) {
        let group: FormGroup = new FormGroup({});
  
        for (let column of answer) {
          group.addControl(column.code, new FormControl(column.answer));
        }
  
        formArray.push(group);
      }
    }

    return formArray;
  }

  public static createValidators(validations: Validation[]): ValidatorFn[] {
    let validators: ValidatorFn[] = [];

    for (let validation of validations) {
      switch (validation.validationType) {
        case 'required':
          validators.push(Validators.required);
          break;
        case 'max-length':
          validators.push(Validators.maxLength((<MaxLength> validation).value));
          break;
        case 'min-length':
          validators.push(Validators.minLength((<MinLength> validation).value));
      }
    }

    return validators;
  } 
}
