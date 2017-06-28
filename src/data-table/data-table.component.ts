import { style } from '@angular/core/core';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, FormGroupDirective } from '@angular/forms';

import { Question } from '../question';
import { Group, DataTable } from '../group';
import { ReactiveFormsFactory } from '../factory';

@Component({
  selector: 'rb-data-table',
  templateUrl: require('file-loader!./data-table.component.html'),
  styleUrls: [
    require('file-loader!../assets/css/main.css'),
    require('file-loader!./data-table.component.css')
  ]
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
