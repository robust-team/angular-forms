import { Component } from '@angular/core';

import { FieldType } from './question/field-type.enum';
import { StringUtil } from './util/string-util';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-form.component.html',
  inputs: ['groups'],
})
export class RobustFormsComponent {

  fieldType = FieldType;
  groups: Array<any> = [];
  stringUtil = StringUtil;
}
