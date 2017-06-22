import { style } from '@angular/core/core';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, FormGroupDirective } from '@angular/forms';

import { Question } from '../question';
import { Group, DataTable } from '../group';
import { ReactiveFormsFactory } from '../factory';

@Component({
  selector: 'rb-data-table',
  template: `
    <fieldset [formGroup]="formGroup">
    <legend>{{ group.description }}</legend>

    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th class="text-center" *ngFor="let question of group.questions">
              {{ question.description }}
            </th>
            <th class="text-center">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr [formGroup]="newFormGroup">
            <td *ngFor="let question of group.questions">
              <ng-container [ngSwitch]="question.type">

                <ng-template ngSwitchCase="check">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" [name]="question.code" [formControlName]="question.code" />
                      {{ question.description }}
                    </label>
                    <rb-validation-message [validations]="question.validations"
                                           [control]="newFormGroup.get(question.code)"
                                           [submitted]="submitted">
                    </rb-validation-message>
                  </div> <!--/.checkbox-->
                </ng-template> <!--/check-->

                <ng-template ngSwitchCase="radio">
                  <div class="radio" *ngFor="let option of question.options">
                    <label>
                      <input type="radio" [name]="question.code" [value]="option" [formControlName]="question.code" />
                      {{ option }}
                    </label>
                  </div> <!--/.radio-->
                  <rb-validation-message [validations]="question.validations"
                                         [control]="newFormGroup.get(question.code)"
                                         [submitted]="submitted">
                  </rb-validation-message>
                </ng-template> <!--/radio-->

                <ng-template ngSwitchCase="select">
                  <select [id]="question.code" class="form-control" [name]="question.code"
                          [formControlName]="question.code">
                    <option disabled [value]="null">
                      {{ question.placeholder ? question.placeholder : '' }}
                    </option>
                    <option *ngFor="let option of question.options" [value]="option">
                      {{ option }}
                    </option>
                  </select>
                  <rb-validation-message [validations]="question.validations"
                                         [control]="newFormGroup.get(question.code)"
                                         [submitted]="submitted">
                  </rb-validation-message>
                </ng-template> <!--/select-->

                <ng-template ngSwitchCase="textarea">
                  <textarea [id]="question.code" class="form-control" [name]="question.code" rows="5"
                            [placeholder]="question.placeholder ? question.placeholder : ''"
                            [formControlName]="question.code">
                  </textarea>
                  <rb-validation-message [validations]="question.validations"
                                         [control]="newFormGroup.get(question.code)"
                                         [submitted]="submitted">
                  </rb-validation-message>
                </ng-template> <!--/textarea-->

                <ng-template ngSwitchCase="text" ngSwitchDefault>
                  <input type="text" [id]="question.code" class="form-control" [name]="question.code"
                         [placeholder]="question.placeholder ? question.placeholder : ''"
                         [formControlName]="question.code" [mask]="question.mask" />
                  <rb-validation-message [validations]="question.validations"
                                         [control]="newFormGroup.get(question.code)"
                                         [submitted]="submitted">
                  </rb-validation-message>
                </ng-template> <!--/text-->

              </ng-container> <!--/ngSwitch-questionType-->
            </td>
            <td class="text-center">
              <button class="btn btn-default btn-add-row" (click)="addRow();">
                Adicionar
              </button>
            </td>
          </tr>
          <tr *ngFor="let row of formArray?.value; let indexRow = index">
            <td *ngFor="let key of getKeysFromObject(row)">{{ row[key] }}</td>
            <td class="text-center">
              <button class="btn btn-default btn-remove-row" (click)="removeRow(indexRow)">
                Remover
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
  styles: [
    `
      fieldset.datatable {
        border: 1px solid #ccc;
        margin-bottom: 15px;
        padding: 0 15px 15px;
      }

      fieldset.datatable legend {
        border: 1px solid #ccc;
        padding: 5px 10px;
      }
    `
  ]
})
export class DataTableComponent implements OnInit {

  formArray: FormArray;
  newFormGroup: FormGroup;
  submitted: boolean = false;

  @Input() formGroup: FormGroup;
  @Input() group: DataTable;
  @Input() formGroupSubmitted: boolean = false;

  ngOnInit(): void {
    this.formArray = <FormArray>this.formGroup.get(this.group.code);
    this.newFormGroup = ReactiveFormsFactory.createFormGroupFromQuestions(this.group.questions);
  }

  getKeysFromObject(object: Object): string[] {
    return Object.keys(object);
  }

  addRow(): void {
    this.submitted = true;

    if (!this.newFormGroup.valid) {
      return;
    }

    this.formArray.push(Object.assign(new FormGroup({}), this.newFormGroup));
    this.resetForms();
  }

  removeRow(index: number): void {
    this.formArray.removeAt(index);
  }

  resetForms(): void {
    this.newFormGroup.reset();
    this.submitted = false;
  }
}
