import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobustFormComponent } from './robust-form/robust-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RobustFormComponent
  ],
  exports: [
    RobustFormComponent,
  ]
})
export class RobustFormsModule { }
