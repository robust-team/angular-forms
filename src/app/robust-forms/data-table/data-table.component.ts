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

  @Input() formArrayDescription: string;
  @Input() formGroup: FormGroup;
  @Input() group: DataTable;

  ngOnInit() {
    this.loadNewFormGroup();
    this.formArray = <FormArray> this.formGroup.get(this.formArrayDescription);
  }

  loadNewFormGroup() {
    let controls: {[key: string]: AbstractControl} = { };

    for (let question of this.group.questions) {
      controls[question.code] = new FormControl();
    }

    this.newFormGroup = new FormGroup(controls);
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
