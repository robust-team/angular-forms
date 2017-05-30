import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, EventEmitter, Output, Input } from '@angular/core';

import { Group } from './group/group';
import { FieldType } from './question/field-type.enum';
import { GroupType } from './group/group-type.enum';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-form.component.html'
})
export class RobustFormsComponent {

  FieldType = FieldType;
  formGroup: FormGroup;
  GroupType = GroupType;

  @Input() groups: Group[];
  @Output() getValues: EventEmitter<Object> = new EventEmitter();

  public constructor() {
    this.formGroup = new FormGroup({
      'consumo-agua': new FormArray([
        new FormGroup({
          'P-201': new FormControl('123'),
          'P-202': new FormControl('456'),
          'P-203': new FormControl('789'),
          'P-204': new FormControl('321')
        })
      ]),
      'servicos': new FormGroup({
        'P-002': new FormControl('098'),
        'P-003': new FormControl('765'),
        'P-004': new FormControl('543'),
        'P-005': new FormControl('000')
      })
    });
  }

  ngOnInit() {
    let consumoAgua: FormArray = <FormArray> this.formGroup.get('consumo-agua');
    consumoAgua.push(new FormGroup({
      'P-201': new FormControl('xxx'),
      'P-202': new FormControl('yyy'),
      'P-203': new FormControl('zzz'),
      'P-204': new FormControl('aaa')
    }));
  }

  emitValues() {
    this.getValues.emit(this.formGroup.value);
  }
}
