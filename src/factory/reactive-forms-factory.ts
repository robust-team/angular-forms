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

  public static async createFormGroupFromGroups(groups: Group<any>[]): Promise<FormGroup> {
    return new Promise<FormGroup>(async (resolve: (formGroup: FormGroup) => void, reject: (error: string) => void) => {
      try {
        const formGroup: FormGroup = new FormGroup({});

        for await (const group of groups) {
          let control: FormGroup | FormArray;

          if (GroupType.FIELDSET === group.type) {
            control = await ReactiveFormsFactory.createFormGroupFromQuestions((<Fieldset>group).questions);
          } else {
            control = await ReactiveFormsFactory.createFormArrayFromQuestions((<DataTable>group).questions.slice(1));

            if ((<DataTable>group).validations && 0 < (<DataTable>group).validations.length) {
              control.setValidators(await ReactiveFormsFactory.createValidators((<DataTable>group).validations));
            }
          }

          formGroup.addControl(group.code, control);
        }

        resolve(formGroup);
      } catch (error) {
        reject(error);
      }
    });
  }

  public static async createFormGroupFromQuestions(questions: Question<any>[], checkDisabledQuestions: boolean = true): Promise<FormGroup> {
    return new Promise<FormGroup>(async (resolve: (formGroup: FormGroup) => void, reject: (error: Error) => void) => {
      try {
        const formGroup: FormGroup = new FormGroup({});

        for await (const question of questions) {
          const validators: ValidatorFn[] = await ReactiveFormsFactory.createValidators(question.validations);
          const answer: any = !question.answer && (<Choice>question).defaultOption ? (<Choice>question).defaultOption : question.answer;
          const formState: any = { value: answer, disabled: checkDisabledQuestions && question.disabled };
          const control: FormControl = new FormControl(formState, validators);

          if (question.validations && 0 < question.validations.length) {
            control.setValidators(await ReactiveFormsFactory.createValidators(question.validations));
          }

          formGroup.addControl(question.name, control);
        }

        resolve(formGroup);
      } catch (error) {
        reject(error);
      }
    });
  }

  public static async createFormArrayFromQuestions(questions: Question<any>[][]): Promise<FormArray> {
    return new Promise<FormArray>(async (resolve: (formArray: FormArray) => void, reject: (error: Error) => void) => {
      try {
        const formArray: FormArray = new FormArray([]);

        for await (const question of questions) {
          const group: FormGroup = new FormGroup({});

          for (const column of question) {
            group.addControl(column.name, new FormControl(column.answer));
          }

          formArray.push(group);
        }

        resolve(formArray);
      } catch (error) {
        reject(error);
      }
    });
  }

  public static async createValidators(validations: Validation[]): Promise<ValidatorFn[]> {
    return new Promise<ValidatorFn[]>(async (resolve: (validators: ValidatorFn[]) => void, reject: (error: Error) => void) => {
      try {
        const validators: ValidatorFn[] = [];

        for await (const validation of validations) {
          const validatorFactoryHandler: ValidatorFactoryHandler = (new RequiredValidator())
            .append(new EmailValidator())
            .append(new MaxValidator())
            .append(new MinValidator())
            .append(new MaxLengthValidator())
            .append(new MinLengthValidator())
            .append(new PatternValidator());

          const validatorFn: ValidatorFn = validatorFactoryHandler.handle(validation);
          validators.push(validatorFn);
        }

        resolve(validators);
      } catch (error) {
        reject(error);
      }
    });
  }
}
