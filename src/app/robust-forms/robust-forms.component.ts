import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { Component, EventEmitter, Output, Input } from '@angular/core';

import { Group } from './group/group';
import { FieldType } from './question/field-type.enum';
import { GroupType } from './group/group-type.enum';
import { DataTable } from './group/data-table';
import { Question } from './question/question';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-forms.component.html'
})
export class RobustFormsComponent {

  FieldType = FieldType;
  formGroup: FormGroup;
  GroupType = GroupType;

  @Input() groups: Group[] = [];
  @Output() getValues: EventEmitter<Object> = new EventEmitter();

  ngOnInit() {
    this.formGroup = new FormGroup({});

    for (let group of this.groups) {
      let abstractControl: AbstractControl = group.hasOwnProperty('customType')
        ? this.buildFormArray()
        : this.buildFormGroup(group.questions);

      this.formGroup.addControl(group.code, abstractControl);
    }
  }

  buildFormArray(): FormArray {
    return new FormArray([]);
  }

  buildFormGroup(questions: Question[]): FormGroup {
    let formGroup: FormGroup = new FormGroup({});

    for (let question of questions) {
      formGroup.addControl(question.code, new FormControl());
    }

    return formGroup;
  }

  emitValues() {
    this.getValues.emit(this.formGroup.value);
  }
}
