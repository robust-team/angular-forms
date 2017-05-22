import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobustFormsComponent } from './robust-forms.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RobustFormsComponent
  ],
  exports: [
    RobustFormsComponent,
  ]
})
export class RobustFormsModule { }
