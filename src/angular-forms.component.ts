import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { AngularForms } from '.';
import { Group } from './group';
import { Question, DependencyService } from './question';
import { ReactiveFormsFactory } from './factory';

@Component({
  selector: 'rb-angular-forms',
  // templateUrl: './angular-forms.component.html',
  template: `
    <form [formGroup]="formGroup">
      <ng-container *ngFor="let group of groups">

        <ng-container [ngSwitch]="group.type">

          <ng-container *ngSwitchCase="'fieldset'">
            <fieldset [formGroup]="formGroup.get(group.code)">
              <legend *ngIf="'Ungrouped' !== group.description">{{ group.description }}</legend>

              <ng-container *ngFor="let question of group.questions">

                <ng-container [ngSwitch]="question.type">

                  <ng-template ngSwitchCase="check">
                    <div class="form-group" [hidden]="hideQuestion(question, formGroup.get(group.code))">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" [name]="question.code" [formControlName]="question.code" />
                          {{ question.description }}
                        </label>
                        <rb-validation-message [validations]="question.validations"
                                               [control]="formGroup.get(group.code).get(question.code)"
                                               [submitted]="submitted">
                        </rb-validation-message>
                      </div> <!--/.checkbox-->
                    </div> <!--/.form-group-->
                  </ng-template> <!--/check-->

                  <ng-template ngSwitchCase="radio">
                    <div class="form-group" [hidden]="hideQuestion(question, formGroup.get(group.code))">
                      <label>{{ question.description }}</label>
                      <div class="radio" *ngFor="let option of question.options">
                        <label>
                          <input type="radio" [name]="question.code" [value]="option" [formControlName]="question.code" />
                          {{ option }}
                        </label>
                      </div> <!--/.radio-->
                      <rb-validation-message [validations]="question.validations"
                                             [control]="formGroup.get(group.code).get(question.code)"
                                             [submitted]="submitted">
                      </rb-validation-message>
                    </div> <!--/.form-group-->
                  </ng-template> <!--/radio-->

                  <ng-template ngSwitchCase="select">
                    <div class="form-group" [hidden]="hideQuestion(question, formGroup.get(group.code))">
                      <label [for]="question.code">{{ question.description }}</label>
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
                                             [control]="formGroup.get(group.code).get(question.code)"
                                             [submitted]="submitted">
                      </rb-validation-message>
                    </div> <!--/.form-group-->
                  </ng-template> <!--/select-->

                  <ng-template ngSwitchCase="textarea">
                    <div class="form-group" [hidden]="hideQuestion(question, formGroup.get(group.code))">
                      <label [for]="question.code">{{ question.description }}</label>
                      <textarea [id]="question.code" class="form-control" [name]="question.code" rows="5"
                                [placeholder]="question.placeholder ? question.placeholder : ''"
                                [formControlName]="question.code">
                      </textarea>
                      <rb-validation-message [validations]="question.validations"
                                             [control]="formGroup.get(group.code).get(question.code)"
                                             [submitted]="submitted">
                      </rb-validation-message>
                    </div> <!--/.form-group-->
                  </ng-template> <!--/textarea-->

                  <ng-template ngSwitchCase="text" ngSwitchDefault>
                    <div class="form-group" [hidden]="hideQuestion(question, formGroup.get(group.code))">
                      <label [for]="question.code">{{ question.description }}</label>
                      <input type="text" [id]="question.code" class="form-control" [name]="question.code"
                             [placeholder]="question.placeholder ? question.placeholder : ''"
                             [formControlName]="question.code" [mask]="question.mask" />
                      <rb-validation-message [validations]="question.validations"
                                             [control]="formGroup.get(group.code).get(question.code)"
                                             [submitted]="submitted">
                      </rb-validation-message>
                    </div> <!--/.form-group-->
                  </ng-template> <!--/text-->
                </ng-container> <!--/ngSwitch-questionType-->

              </ng-container> <!--/ngFor-question-->
            </fieldset>
          </ng-container> <!--/ngSwitchCase-fieldset-->

          <ng-container *ngSwitchCase="'datatable'">
            <rb-data-table [group]="group" [formGroup]="formGroup" [formGroupSubmitted]="submitted"></rb-data-table>
          </ng-container>

        </ng-container> <!--/ngSwitch-groupType-->

      </ng-container> <!--groups-->
    </form>
  `,
  providers: [DependencyService]
})
export class AngularFormsComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;

  @Input() groups: Group[] = [];

  constructor(private dependencyService: DependencyService) { }

  ngOnInit(): void {
    this.groups = AngularForms.fromJson(this.groups);
    this.formGroup = ReactiveFormsFactory.createFormGroupFromGroups(this.groups);
  }

  hideQuestion(question: Question<any>, formGroup: FormGroup): boolean {
    return this.dependencyService.hideQuestion(question, formGroup);
  }

  getForm(): { valid: boolean, value: any } {
    this.submitted = true;

    return { valid: this.formGroup.valid, value: this.formGroup.value };
  }
}
