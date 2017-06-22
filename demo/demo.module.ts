import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFormsModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [BrowserModule, AngularFormsModule],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class DemoModule {}