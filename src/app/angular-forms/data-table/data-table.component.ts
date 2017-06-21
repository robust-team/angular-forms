import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, FormGroupDirective } from '@angular/forms';

import { Question } from '../question';
import { Group, DataTable } from '../group';
import { ReactiveFormsFactory } from '../factory';

@Component({
  selector: 'rb-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  formArray: FormArray;
  newFormGroup: FormGroup;
  submitted: boolean = false;

  @Input() formGroup: FormGroup;
  @Input() group: DataTable;
  @Input() formGroupSubmitted: boolean = false;

  ngOnInit(): void {
    this.formArray = <FormArray> this.formGroup.get(this.group.code);
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
