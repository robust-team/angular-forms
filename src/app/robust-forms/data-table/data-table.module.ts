import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableComponent } from './data-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DataTableComponent],
  exports: [DataTableComponent]
})
export class DataTableModule { }
