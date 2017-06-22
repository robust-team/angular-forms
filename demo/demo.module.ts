import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoComponent } from './demo.component';
import { AngularFormsModule } from '../src';

@NgModule({
  imports: [
    BrowserModule,
    AngularFormsModule
  ],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
