import { Component, ViewChild, OnInit } from '@angular/core';

import { DemoService } from './demo.service';
import { AngularFormsComponent } from '../src';

@Component({
  selector: 'rb-demo-app',
  template: `
    <div class='container'>
      <h1>AngularForms</h1>
      <rb-angular-forms #angularForms [groups]="customForm" [readOnly]="false" lang="pt-BR"></rb-angular-forms>
      <button class="btn btn-primary" (click)="getForm()">getForm()</button>
      <button class="btn btn-primary" (click)="isValid()">isValid()</button>
      <button class="btn btn-primary" (click)="getAnswersGroups()">getAnswersGroups()</button>
      <button class="btn btn-primary" (click)="getAnswers()">getAnswers()</button>
    </div>
  `,
  providers: [DemoService]
})
export class DemoComponent implements OnInit {

  public customForm: any[];

  @ViewChild('angularForms') public angularForms: AngularFormsComponent;

  public constructor(private demoService: DemoService) { }

  public ngOnInit(): void {
    this.customForm = this.demoService.getForm();
  }

  public getForm(): void {
    console.log(this.angularForms.getForm());
  }

  public isValid(): void {
    console.log(this.angularForms.isValid());
  }

  public getAnswersGroups(): void {
    console.log(this.angularForms.getAnswersGroups());
  }

  public getAnswers(): void {
    console.log(this.angularForms.getAnswers());
  }
}
