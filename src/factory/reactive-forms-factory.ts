import { FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Group, GroupType, Fieldset, DataTable } from '../group';
import { Choice, Question } from '../question';
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
      let control: FormGroup | FormArray;

      if (GroupType.FIELDSET === group.type) {
        control = ReactiveFormsFactory.createFormGroupFromQuestions((<Fieldset>group).questions);
      } else {
        control = ReactiveFormsFactory.createFormArrayFromQuestions((<DataTable>group).questions.slice(1));

        if ((<DataTable>group).validations && 0 < (<DataTable>group).validations.length) {
          control.setValidators(ReactiveFormsFactory.createValidators((<DataTable>group).validations));
        }
      }

      formGroup.addControl(group.code, control);
    }

    return formGroup;
  }

  public static createFormGroupFromQuestions(questions: Question<any>[], checkDisabledQuestions: boolean = true): FormGroup {
    const formGroup: FormGroup = new FormGroup({});

    for (const question of questions) {
      const validators: ValidatorFn[] = ReactiveFormsFactory.createValidators(question.validations);
      const answer: any = !question.answer && (<Choice>question).defaultOption ? (<Choice>question).defaultOption : question.answer;
      const control: FormControl = new FormControl({ value: answer, disabled: checkDisabledQuestions && question.disabled }, validators);

      if (question.validations && 0 < question.validations.length) {
        control.setValidators(ReactiveFormsFactory.createValidators(question.validations));
      }

      formGroup.addControl(question.name, control);
    }

    return formGroup;
  }

  public static createFormArrayFromQuestions(questions: Question<any>[][]): FormArray {
    const formArray: FormArray = new FormArray([]);

    for (const question of questions) {
      const group: FormGroup = new FormGroup({});

      for (const column of question) {
        group.addControl(column.name, new FormControl(column.answer));
      }

      formArray.push(group);
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
