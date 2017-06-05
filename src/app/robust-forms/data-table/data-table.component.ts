import { Component, Input, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, FormGroupDirective } from '@angular/forms';

import { Question } from '../question';
import { Group } from './../group/group';
import { DataTable } from '../group/data-table';
import { ReactiveFormsFactory } from './../reactive-forms-factory';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  formArray: FormArray;
  newFormGroup: FormGroup;
  Object = Object;

  @Input() formGroup: FormGroup;
  @Input() group: DataTable;
  @ViewChild('dataTableForm') dataTableForm: FormGroupDirective;

  ngOnInit() {
    this.formArray = <FormArray> this.formGroup.get(this.group.code);
    this.newFormGroup = ReactiveFormsFactory.createFormGroupFromQuestions(this.group.questions);
  }

  addRow() {
    this.dataTableForm.onSubmit(this.newFormGroup.value);

    if (!this.newFormGroup.valid) {
      return;
    }

    this.formArray.push(Object.assign(new FormGroup({}), this.newFormGroup));
    this.resetForms();
  }

  removeRow(index: number) {
    this.formArray.removeAt(index);
  }

  resetForms() {
    this.newFormGroup.reset();
    this.dataTableForm.resetForm();
  }

  printNewValues() {
    console.log(this.newFormGroup);
    console.log(this.newFormGroup.value);
  }
}
