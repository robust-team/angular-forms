import { Component, Input } from '@angular/core';

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
  fieldType = FieldType;

  @Input() group: DataTable;
}
