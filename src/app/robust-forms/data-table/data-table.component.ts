import { Component, Input } from '@angular/core';

import { Question } from '../question';
import { FieldType } from '../question/field-type.enum';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  fieldType = FieldType;

  @Input() question: Question;
}
