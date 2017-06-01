import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RobustFormsComponent } from './robust-forms.component';
import { DataTableModule } from './data-table/data-table.module';
import { ValidationMessageModule } from './validation-message/validation-message.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTableModule,
    ValidationMessageModule
  ],
  declarations: [RobustFormsComponent],
  exports: [RobustFormsComponent]
})
export class RobustFormsModule { }
