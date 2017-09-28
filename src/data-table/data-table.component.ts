import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { Status } from '..';
import { Select, SelectService, Question, QuestionType } from '../question';
import { Group, DataTable } from '../group';
import { ReactiveFormsFactory } from '../factory';

@Component({
  selector: 'rb-data-table',
  template: `
    <fieldset *ngIf="Status['READY'] === status" class="rb-data-table rb-data-table-{{ group.code }}" [formGroup]="formGroup"
      [ngClass]="{ 'read-only': readOnly }">
      <legend>
        <span [ngClass]="{ 'required-control': group.isRequired() && !readOnly }">
          {{ group.description }}
        </span>
      </legend>

      <div class="table-responsive">
        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th class="text-center" *ngFor="let question of group.questions[0]">
                <span [ngClass]="{ 'required-control': question.isRequired() && !readOnly }">
                  {{ question.description }}
                </span>
              </th>
              <th class="text-center" *ngIf="!readOnly">
                {{ 'ACTION' | translate }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr [formGroup]="newFormGroup" *ngIf="!readOnly">
              <td *ngFor="let question of group.questions[0]">
                <ng-container [ngSwitch]="question.type">

                  <ng-template ngSwitchCase="checkbox">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" [name]="question.name" [formControlName]="question.name" />
                        {{ question.description }}
                      </label>
                      <rb-validation-message [validations]="question.validations"
                                             [control]="newFormGroup.get(question.name)"
                                             [submitted]="submitted">
                      </rb-validation-message>
                    </div> <!--/.checkbox-->
                  </ng-template> <!--/checkbox-->

                  <ng-template ngSwitchCase="radio">
                    <div class="radio" *ngFor="let option of question.options">
                      <label>
                        <input type="radio" [name]="question.name" [value]="option" [formControlName]="question.name" />
                        {{ option }}
                      </label>
                    </div> <!--/.radio-->
                    <rb-validation-message [validations]="question.validations"
                                           [control]="newFormGroup.get(question.name)"
                                           [submitted]="submitted">
                    </rb-validation-message>
                  </ng-template> <!--/radio-->

                  <ng-template ngSwitchCase="select">
                    <select [id]="question.name" class="form-control" [name]="question.name" #selectQuestion
                          [formControlName]="question.name"
                          (change)="onChangeOptionSelect(selectQuestion, newFormGroup.get(question.name), question)">
                      <option disabled [value]="null">
                        {{ question.placeholder ? question.placeholder : '' }}
                      </option>
                      <option *ngFor="let option of question.options" [value]="option['value'] || option">
                        {{ option['description'] || option }}
                      </option>
                    </select>
                    <ng-container *ngIf="question.editableOption && question.editableOption.length">
                      <input [hidden]="question.editableOption !== selectQuestion.value"
                             type="text" [id]="question.name" class="form-control editable-option" [name]="question.name"
                             [formControlName]="question.name" />
                    </ng-container>
                    <rb-validation-message [validations]="question.validations"
                                           [control]="newFormGroup.get(question.name)"
                                           [submitted]="submitted">
                    </rb-validation-message>
                  </ng-template> <!--/select-->

                  <ng-template ngSwitchCase="textarea">
                    <textarea [id]="question.name" class="form-control" [name]="question.name" rows="5"
                              placeholder="{{ question.placeholder ? question.placeholder : '' }}"
                              [formControlName]="question.name">
                    </textarea>
                    <rb-validation-message [validations]="question.validations"
                                           [control]="newFormGroup.get(question.name)"
                                           [submitted]="submitted">
                    </rb-validation-message>
                  </ng-template> <!--/textarea-->

                  <ng-template ngSwitchCase="text" ngSwitchDefault>
                    <input type="text" [id]="question.name" class="form-control" [name]="question.name"
                            placeholder="{{ question.placeholder ? question.placeholder : '' }}"
                            [formControlName]="question.name" [mask]="question.mask" />
                    <rb-validation-message [validations]="question.validations"
                                           [control]="newFormGroup.get(question.name)"
                                           [submitted]="submitted">
                    </rb-validation-message>
                  </ng-template> <!--/text-->

                </ng-container> <!--/ngSwitch-questionType-->
              </td>
              <td class="text-center">
                <button class="btn btn-default btn-add-data" (click)="addData()">
                  <i class="rb-ico rb-ico-add" aria-hidden="true"></i>
                  {{ 'ADD' | translate }}
                </button>
              </td>
            </tr>
            <tr class="data" *ngFor="let data of formArray?.value; let indexData = index">
              <td *ngFor="let key of getKeysFromObject(data)" [class.text-center]="isCheckbox(getQuestionByName(key))">
                <ng-container [ngSwitch]="getQuestionByName(key).type">
                  <ng-template ngSwitchCase="checkbox">
                    <i class="rb-ico rb-ico-square rb-ico-{{ data[key] ? 'checked' : 'unchecked' }}" aria-hidden="true"></i>
                  </ng-template>

                  <ng-template ngSwitchDefault>
                    {{ data[key] || 'NOT_INFORMED' | translate }}
                  </ng-template>
                </ng-container>
              </td>
              <td class="text-center" *ngIf="!readOnly">
                <button class="btn btn-default btn-remove-data" (click)="removeData(indexData)">
                  <i class="rb-ico rb-ico-remove" aria-hidden="true"></i>
                  {{ 'REMOVE' | translate }}
                </button>
              </td>
            </tr>
            <tr *ngIf="readOnly && !formArray?.value.length">
              <td [attr.colspan]="group.questions[0].length" class="text-center">{{ 'NO_REGISTERS' | translate }}</td>
            </tr>
          </tbody>
        </table>
      </div> <!--/.table-responsive-->
      <rb-validation-message [validations]="group.validations"
                             [control]="formArray"
                             [submitted]="formGroupSubmitted">
      </rb-validation-message>
    </fieldset>
  `,
})
export class DataTableComponent implements OnInit {

  public readonly Status: Object = Status;

  public formArray: FormArray;
  public newFormGroup: FormGroup;
  public submitted: boolean = false;

  @Input() public formGroup: FormGroup;
  @Input() public group: DataTable;
  @Input() public formGroupSubmitted: boolean = false;
  @Input() public readOnly: boolean = false;

  @Output() public error: EventEmitter<Error> = new EventEmitter();
  @Output() public ready: EventEmitter<boolean> = new EventEmitter();

  private _status: Status;

  public ngOnInit(): void {
    this.formArray = <FormArray>this.formGroup.get(this.group.code);

    if (this.formArray) {
      this._status = Status.LOADING;
      this.load()
        .then(() => {
          this._status = Status.READY;
          this.ready.emit();
        })
        .catch((error: Error) => {
          this._status = Status.ERROR;
          this.error.emit(error);
        });
    }
  }

  public onChangeOptionSelect(htmlFormControl: HTMLInputElement, formControl: FormControl, question: Select): void {
    SelectService.onChangeOption(htmlFormControl, formControl, question);
  }

  public getKeysFromObject(object: Object): string[] {
    return Object.keys(object);
  }

  public addData(): void {
    this.submitted = true;

    if (!this.newFormGroup.valid) {
      return;
    }

    this.formArray.push(Object.assign(new FormGroup({}), this.newFormGroup));
    this.resetForms();
  }

  public removeData(index: number): void {
    this.formArray.removeAt(index);
  }

  public resetForms(): void {
    this.newFormGroup.reset();
    this.submitted = false;
  }

  public getQuestionByName(name: string): Question<any> {
    for (const question of this.group.questions[0]) {
      if (name === question.name) {
        return question;
      }
    }

    return null;
  }

  public isCheckbox(question: Question<any>): boolean {
    return QuestionType.CHECKBOX === question.type;
  }

  public get status(): Status {
    return this._status;
  }

  private async load(): Promise<void> {
    return new Promise<void>(async (resolve: () => void, reject: (error: Error) => void) => {
      try {
        this.newFormGroup = await ReactiveFormsFactory.createFormGroupFromQuestions(this.group.questions[0], false);

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
