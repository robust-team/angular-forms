import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgMaskModule } from '@fagnerlima/ng-mask';
import { AngularFormsComponent } from '.';
import { DataTableModule } from './data-table';
import { ValidationMessageModule } from './validation-message';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AngularFormsTranslateLoader } from './angular-forms-translate-loader';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTableModule,
    ValidationMessageModule,
    NgMaskModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: AngularFormsTranslateLoader
      }
    })
  ],
  declarations: [AngularFormsComponent],
  exports: [AngularFormsComponent]
})
export class AngularFormsModule { }
