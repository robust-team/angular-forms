import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgMaskModule } from '@fagnerlima/ng-mask';
import { RobustFormsComponent } from '.';
import { DataTableModule } from './data-table';
import { ValidationMessageModule } from './validation-message';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTableModule,
    ValidationMessageModule,
    NgMaskModule
  ],
  declarations: [RobustFormsComponent],
  exports: [RobustFormsComponent]
})
export class RobustFormsModule { }
