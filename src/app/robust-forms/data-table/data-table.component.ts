import { ReactiveFormsFactory } from './../reactive-forms-factory';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';

import { Question } from '../question';
import { Group } from './../group/group';
import { DataTable } from '../group/data-table';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  formArray: FormArray;
  newFormGroup: FormGroup;
  Object = Object;

  @Input() formGroup: FormGroup;
  @Input() group: DataTable;

  ngOnInit() {
    this.loadNewFormGroup();
    this.formArray = <FormArray> this.formGroup.get(this.group.code);
  }

  loadNewFormGroup() {
    this.newFormGroup = ReactiveFormsFactory.createFormGroupFromQuestions(this.group.questions);
  }

  addRow() {
    this.formArray.push(this.newFormGroup);
    this.loadNewFormGroup();
  }

  removeRow(index: number) {
    this.formArray.removeAt(index);
  }

  printNewValues() {
    console.log(this.newFormGroup);
    console.log(this.newFormGroup.value);
  }
}
