import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobustFormsComponent } from './robust-forms.component';
import { DataTableModule } from './data-table/data-table.module';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule
  ],
  declarations: [RobustFormsComponent],
  exports: [RobustFormsComponent]
})
export class RobustFormsModule { }
