import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataTableComponent } from './data-table.component';
import { ValidationMessageModule } from '../validation-message/validation-message.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationMessageModule
  ],
  declarations: [DataTableComponent],
  exports: [DataTableComponent],
})
export class DataTableModule { }
