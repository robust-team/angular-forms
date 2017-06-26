import { FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';

import { DataTable, Group } from '../group';
import { Question } from '../question';
import { Validation, MinLength, MaxLength, Pattern, Required, Min, Max } from '../validation';
import {
  ValidatorFactoryHandler, RequiredValidator, EmailValidator, MaxValidator, MinValidator,
  MaxLengthValidator, MinLengthValidator, PatternValidator
} from '../chain-of-responsibility/validator-factory';
import { ValidationTypeNotFoundError } from '../chain-of-responsibility/validator-factory/error';

export class ReactiveFormsFactory {

  public static createFormGroupFromGroups(groups: Group[]): FormGroup {
    const formGroup: FormGroup = new FormGroup({});

    for (const group of groups) {
      let control: FormGroup|FormArray;

      if ('datatable' !== group.type) {
        control = ReactiveFormsFactory.createFormGroupFromQuestions(group.questions);
      } else {
        const dataTable: DataTable = <DataTable> group;

        control = ReactiveFormsFactory.createFormArray(dataTable.answers);
        control.setValidators(ReactiveFormsFactory.createValidators(dataTable.validations));
      }

      formGroup.addControl(group.code, control);
    }

    return formGroup;
  }

  public static createFormGroupFromQuestions(questions: Question<any>[]): FormGroup {
    const formGroup: FormGroup = new FormGroup({});

    for (const question of questions) {
      const validators: ValidatorFn[] = ReactiveFormsFactory.createValidators(question.validations);
      const formState: any = !question.answer && question['defaultOption']
        ? question['defaultOption']
        : question.answer;

      formGroup.addControl(question.code, new FormControl(formState, validators));
    }

    return formGroup;
  }

  public static createFormArray(answers: Question<any>[][] = null): FormArray {
    const formArray: FormArray = new FormArray([]);

    if (answers) {
      for (const answer of answers) {
        const group: FormGroup = new FormGroup({});

        for (const column of answer) {
          group.addControl(column.code, new FormControl(column.answer));
        }

        formArray.push(group);
      }
    }

    return formArray;
  }

  public static createValidators(validations: Validation[]): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    for (const validation of validations) {
      const validatorFactoryHandler: ValidatorFactoryHandler = (new RequiredValidator())
        .append(new EmailValidator())
        .append(new MaxValidator())
        .append(new MinValidator())
        .append(new MaxLengthValidator())
        .append(new MinLengthValidator())
        .append(new PatternValidator());

      try {
        const validatorFn: ValidatorFn = validatorFactoryHandler.handle(validation);
        validators.push(validatorFn);
      } catch (error) {
        if (error instanceof ValidationTypeNotFoundError) {
          console.error(`[AngularForms] ${error.name}: ${error.message}`);
        }
      }
    }

    return validators;
  }
}
