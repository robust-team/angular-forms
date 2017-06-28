import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { AngularForms } from '.';
import { Group } from './group';
import { Question, DependencyService } from './question';
import { ReactiveFormsFactory } from './factory';

@Component({
  selector: 'rb-angular-forms',
  template: `
    <form [formGroup]="formGroup" [ngClass]="{ 'read-only': readOnly }">
      <ng-container *ngFor="let group of groups">

        <ng-container [ngSwitch]="group.type">

          <ng-container *ngSwitchCase="'group'">
            <fieldset [formGroup]="formGroup.get(group.code)">
              <legend *ngIf="'Ungrouped' !== group.description">{{ group.description }}</legend>

              <ng-container *ngFor="let question of group.questions">

                <ng-container [ngSwitch]="question.type">

                  <ng-template ngSwitchCase="check">
                    <ng-container *ngIf="!readOnly">
                      <div class="form-group" [hidden]="hideQuestion(question, formGroup.get(group.code))">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" [name]="question.name" [formControlName]="question.name" />
                            {{ question.description }}
                          </label>
                          <rb-validation-message [validations]="question.validations"
                                                 [control]="formGroup.get(group.code).get(question.name)"
                                                 [submitted]="submitted">
                          </rb-validation-message>
                        </div> <!--/.checkbox-->
                      </div> <!--/.form-group-->
                    </ng-container> <!--/!readOnly-->

                    <ng-container *ngIf="readOnly">
                      <div class="form-group">
                        <label class="checkbox" [ngClass]="{ 'checked': question.answer }">{{ question.description }}</label>
                      </div> <!--/.form-group-->
                    </ng-container> <!--/readOnly-->
                  </ng-template> <!--/check-->

                  <ng-template ngSwitchCase="radio">
                    <ng-container *ngIf="!readOnly">
                      <div class="form-group" [hidden]="hideQuestion(question, formGroup.get(group.code))">
                        <label>{{ question.description }}</label>
                        <div class="radio" *ngFor="let option of question.options">
                          <label>
                            <input type="radio" [name]="question.name" [value]="option" [formControlName]="question.name" />
                            {{ option }}
                          </label>
                        </div> <!--/.radio-->
                        <rb-validation-message [validations]="question.validations"
                                               [control]="formGroup.get(group.code).get(question.name)"
                                               [submitted]="submitted">
                        </rb-validation-message>
                      </div> <!--/.form-group-->
                    </ng-container> <!--/!readOnly-->

                    <ng-container *ngIf="readOnly">
                      <div class="form-group">
                        <label>{{ question.description }}:</label>
                        <span>{{ question.answer }}</span>
                      </div> <!--/.form-group-->
                    </ng-container>
                  </ng-template> <!--/radio-->

                  <ng-template ngSwitchCase="select">
                    <ng-container *ngIf="!readOnly">
                      <div class="form-group" [hidden]="hideQuestion(question, formGroup.get(group.code))">
                        <label [for]="question.name">{{ question.description }}</label>
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
                                               [control]="formGroup.get(group.code).get(question.name)"
                                               [submitted]="submitted">
                        </rb-validation-message>
                      </div> <!--/.form-group-->
                    </ng-container> <!--/!readOnly-->

                    <ng-container *ngIf="readOnly">
                      <div class="form-group">
                        <label>{{ question.description }}:</label>
                        <span>{{ question.answer }}</span>
                      </div> <!--/.form-group-->
                    </ng-container> <!--/readOnly-->
                  </ng-template> <!--/select-->

                  <ng-template ngSwitchCase="textarea">
                    <ng-container *ngIf="!readOnly">
                      <div class="form-group" [hidden]="hideQuestion(question, formGroup.get(group.code))">
                        <label [for]="question.name">{{ question.description }}</label>
                        <textarea [id]="question.name" class="form-control" [name]="question.name" rows="5"
                                  placeholder="{{ question.placeholder ? question.placeholder : '' }}"
                                  [formControlName]="question.name">
                        </textarea>
                        <rb-validation-message [validations]="question.validations"
                                               [control]="formGroup.get(group.code).get(question.name)"
                                               [submitted]="submitted">
                        </rb-validation-message>
                      </div> <!--/.form-group-->
                    </ng-container> <!--/!readOnly-->

                    <ng-container *ngIf="readOnly">
                      <div class="form-group">
                        <label>{{ question.description }}:</label>
                        <span>{{ question.answer }}</span>
                      </div> <!--/.form-group-->
                    </ng-container> <!--/readOnly-->
                  </ng-template> <!--/textarea-->

                  <ng-template ngSwitchCase="text" ngSwitchDefault>
                    <ng-container *ngIf="!readOnly">
                      <div class="form-group" [hidden]="hideQuestion(question, formGroup.get(group.code))">
                        <label [for]="question.name">{{ question.description }}</label>
                        <input type="text" [id]="question.name" class="form-control" [name]="question.name"
                               placeholder="{{ question.placeholder ? question.placeholder : '' }}"
                               [formControlName]="question.name" [mask]="question.mask" />
                        <rb-validation-message [validations]="question.validations"
                                               [control]="formGroup.get(group.code).get(question.name)"
                                               [submitted]="submitted">
                        </rb-validation-message>
                      </div> <!--/.form-group-->
                    </ng-container> <!--/!readOnly-->

                    <ng-container *ngIf="readOnly">
                      <div class="form-group">
                        <label>{{ question.description }}:</label>
                        <span>{{ question.answer }}</span>
                      </div> <!--/.form-group-->
                    </ng-container>
                  </ng-template> <!--/text-->
                </ng-container> <!--/ngSwitch-questionType-->

              </ng-container> <!--/ngFor-question-->
            </fieldset>
          </ng-container> <!--/ngSwitchCase-fieldset-->

          <ng-container *ngSwitchDefault>
            <rb-data-table [group]="group" [formGroup]="formGroup" [formGroupSubmitted]="submitted" [readOnly]="readOnly"></rb-data-table>
          </ng-container>

        </ng-container> <!--/ngSwitch-groupType-->

      </ng-container> <!--groups-->
    </form>
  `,
  styles: [`
    .read-only label.checkbox:before {
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

    .read-only label.checkbox.checked:before { content: '✓' }
  `],
  providers: [DependencyService]
})
export class AngularFormsComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;

  @Input() groups: Group[] = [];
  @Input() readOnly: boolean = false;

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
