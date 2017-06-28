import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { NgMaskModule } from '@fagnerlima/ng-mask';
import { DataTableComponent } from '.';
import { ValidationMessageModule } from '../validation-message';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationMessageModule,
    NgMaskModule,
    TranslateModule
  ],
  declarations: [DataTableComponent],
  exports: [DataTableComponent],
})
export class DataTableModule { }
