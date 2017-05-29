import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

import { FieldType } from './question/field-type.enum';
import { GroupType } from './group/group-type.enum';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-form.component.html',
  inputs: ['groups'],
})
export class RobustFormsComponent {

  fieldType = FieldType;
  form: FormGroup;
  groupType = GroupType;
  groups: Array<any> = [];

  ngOnInit() {
    this.form = new FormGroup({
      'P-201': new FormControl(null),
      'consumo-agua': new FormGroup({
        'P-201': new FormControl(null)
      })
    });
  }
}
