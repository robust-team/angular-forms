import { style } from '@angular/core/core';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, FormGroupDirective } from '@angular/forms';

import { Question } from '../question';
import { Group, DataTable } from '../group';
import { ReactiveFormsFactory } from '../factory';

@Component({
  selector: 'rb-data-table',
  template: `
    <fieldset [formGroup]="formGroup" [ngClass]="{ 'read-only': readOnly }">
      <legend>{{ group.description }}</legend>

      <div class="table-responsive">
        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th class="text-center" *ngFor="let question of group.questions[0]">
                {{ question.description }}
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

                  <ng-template ngSwitchCase="check">
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
                  </ng-template> <!--/check-->

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
                    <select [id]="question.name" class="form-control" [name]="question.name"
                            [formControlName]="question.name">
                      <option disabled [value]="null">
                        {{ question.placeholder ? question.placeholder : '' }}
                      </option>
                      <option *ngFor="let option of question.options" [value]="option">
                        {{ option }}
                      </option>
                    </select>
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
              <td *ngFor="let key of getKeysFromObject(data)" class="{{ 'check' === getQuestionByName(key).type ? 'text-center' : '' }}">
                <ng-container [ngSwitch]="getQuestionByName(key).type">
                  <ng-template ngSwitchCase="check">
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
          </tbody>
        </table>
      </div> <!--/.table-responsive-->
      <rb-validation-message [validations]="group.validations"
                             [control]="formArray"
                             [submitted]="formGroupSubmitted">
      </rb-validation-message>
    </fieldset>
  `,
  styles: [`
    /* Icons */
    .rb-ico { font-style: normal }
    .rb-ico:after { font-size: 1.6rem }
    .rb-ico.rb-ico-add:after { content: '✚' }
    .rb-ico.rb-ico-remove:after { content: '✖' }
    .rb-ico.rb-ico-square:after {
      background: linear-gradient(to bottom, #fff 0px, #e6e6e6 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
      border: 1px solid #888;
      border-radius: .3rem;
      content: '';
      cursor: default;
      display: inline-block;
      font-size: 1.6rem;
      height: 1.4rem;
      line-height: 1.4rem;
      margin-right: .5rem;
      text-align: center;
      width: 1.4rem;
    }
    .rb-ico.rb-ico-square.rb-ico-checked:after { content: '✔' }
    .rb-ico.rb-ico-square.rb-ico-unchecked:after { content: '' }

    fieldset.datatable {
      border: 1px solid #ccc;
      margin-bottom: 15px;
      padding: 0 15px 15px;
    }
    fieldset.datatable legend {
      border: 1px solid #ccc;
      padding: 5px 10px;
    }
  `]
})
export class DataTableComponent implements OnInit {

  public formArray: FormArray;
  public newFormGroup: FormGroup;
  public submitted: boolean = false;

  @Input() public formGroup: FormGroup;
  @Input() public group: DataTable;
  @Input() public formGroupSubmitted: boolean = false;
  @Input() public readOnly: boolean = false;

  public ngOnInit(): void {
    this.formArray = <FormArray>this.formGroup.get(this.group.code);
    this.newFormGroup = ReactiveFormsFactory.createFormGroupFromQuestions(this.group.questions[0]);
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
}
