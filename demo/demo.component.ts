import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { DemoService } from './demo.service';
import { AngularFormsComponent } from '../src';
import { Fieldset } from '../src/group/fieldset';

@Component({
  selector: 'rb-demo-app',
  template: `
    <div class='container'>
      <h1>AngularForms</h1>

      <div class="alert alert-danger" *ngIf="errorMessage">
        <p>{{ errorMessage }}</p>
      </div>

      <rb-angular-forms #angularForms [groups]="customForm" [readOnly]="false" lang="pt-BR" (error)="onError($event)"></rb-angular-forms>

      <button class="btn btn-primary" (click)="angularForms.submit()">submit()</button>
      <button class="btn btn-primary" (click)="isPristine()">isPristine()</button>
      <button class="btn btn-primary" (click)="isDirty()">isDirty()</button>
      <button class="btn btn-primary" (click)="isValid()">isValid()</button>
      <button class="btn btn-primary" (click)="getForm()">getForm()</button>
      <button class="btn btn-primary" (click)="isValid()">isValid()</button>
      <button class="btn btn-primary" (click)="getAnswersGroups()">getAnswersGroups()</button>
      <button class="btn btn-primary" (click)="getAnswers()">getAnswers()</button>
    </div>
  `,
  providers: [DemoService]
})
export class DemoComponent implements OnInit, AfterViewInit {

  public customForm: any[];

  @ViewChild('angularForms') public angularForms: AngularFormsComponent;

  private _errorMessage: string;

  public constructor(
    private demoService: DemoService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.customForm = this.demoService.getForm();
  }

  public ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  public onError(error: Error): void {
    this._errorMessage = 'Error';
  }

  public getForm(): void {
    console.log(this.angularForms.getForm());
  }

  public isPristine(): void {
    console.log(this.angularForms.isPristine());
  }

  public isDirty(): void {
    console.log(this.angularForms.isDirty());
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

  public get errorMessage(): string {
    return this._errorMessage;
  }
}
