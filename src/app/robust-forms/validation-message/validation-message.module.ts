import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationMessageComponent } from './validation-message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ValidationMessageComponent],
  exports: [ValidationMessageComponent]
})
export class ValidationMessageModule { }
