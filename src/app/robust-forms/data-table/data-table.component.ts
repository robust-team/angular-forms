import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';

import { Question } from '../question';
import { FieldType } from '../question/field-type.enum';
import { Group } from './../group/group';
import { DataTable } from '../group/data-table';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  FieldType = FieldType;
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
    this.newFormGroup = new FormGroup({});

    for (let question of this.group.questions) {
      this.newFormGroup.addControl(question.code, new FormControl());
    }
  }

  addRow() {
    this.formArray.push(this.newFormGroup);
    this.loadNewFormGroup();
  }

  removeRow(index: number) {
    this.formArray.removeAt(index);
  }

  printNewValues() {
    console.log(this.newFormGroup.value);
  }
}
