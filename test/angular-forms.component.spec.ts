import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { assert } from 'chai';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgMaskModule } from '@fagnerlima/ng-mask';
import { AngularFormsComponent } from '../src/angular-forms.component';
import { AngularFormsTranslateLoader } from '../src/angular-forms-translate-loader';
import { DataTableModule } from '../src/data-table';
import { ValidationMessageModule } from '../src/validation-message/validation-message.module';
import { Select, Text, Dependency, DependencyCriteria } from '../src/question';
import { DemoService } from '../demo/demo.service';
import { TooltipModule } from '../src/tooltip/tooltip.module';

describe('AngularFormsComponent', () => {
  let component: AngularFormsComponent;
  let fixture: ComponentFixture<AngularFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DataTableModule,
        ValidationMessageModule,
        NgMaskModule,
        TooltipModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: AngularFormsTranslateLoader
          }
        })
      ],
      declarations: [ AngularFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFormsComponent);
    component = fixture.componentInstance;
    component.groups = (new DemoService()).getForm();

    fixture.detectChanges();
  });

  it('should create', () => {
    assert(component);
  });

  it('should call onChangeOptionSelect method', () => {
    const htmlFormControl: any = { value: 'Option 2' };
    const formControl: FormControl = new FormControl('Option 2');
    const question: Select = new Select('Q-01', 'Question 01', [], 'Option 2', [], false, ['Option 1', 'Option 2'], null, 'Option 2');
    component.onChangeOptionSelect(htmlFormControl, formControl, question);
  });

  it('should call isValid method', () => {
    component.isValid();
  });

  it('should call isPristine method', () => {
    component.isPristine();
  });

  it('should call isDirty method', () => {
    component.isDirty();
  });

  it('should call submit method', () => {
    component.submit();
  });

  it('should not hide a question without dependencies', () => {
    const question01: Select = new Select('Q-01', 'Question 01', [], 'Option 2', [], false, ['Option 1', 'Option 2']);
    const question02: Text = new Text('Q-02', 'Question 02', [], 'text');
    const formGroup: FormGroup = new FormGroup({
      'Q-01': new FormControl('Option 2'),
      'Q-02': new FormControl()
    });

    assert.isFalse(component.hideQuestion(question02, formGroup));
  });

  it('should not hide a question', () => {
    const question01: Select = new Select('Q-01', 'Question 01', [], 'Option 2', [], false, ['Option 1', 'Option 2']);
    const question02: Text = new Text('Q-02', 'Question 02', [
      new Dependency('Q-01', DependencyCriteria.EQUALS, 'Option 2'), new Dependency('Q-03', DependencyCriteria.EQUALS, 'Option 2')
    ], 'text');
    const formGroup: FormGroup = new FormGroup({
      'Q-01': new FormControl('Option 2'),
      'Q-02': new FormControl()
    });

    assert.isFalse(component.hideQuestion(question02, formGroup));
  });

  it('should hide a question without dependencies', () => {
    const question01: Select = new Select('Q-01', 'Question 01', [], 'Option 1', [], false, ['Option 1', 'Option 2']);
    const question02: Text = new Text('Q-02', 'Question 02', [new Dependency('Q-01', DependencyCriteria.EQUALS, 'Option 2')], 'text');
    const formGroup: FormGroup = new FormGroup({
      'Q-01': new FormControl('Option 1'),
      'Q-02': new FormControl()
    });

    assert.isTrue(component.hideQuestion(question02, formGroup));
  });

  it('should call the getForm method', () => {
    const form: Object = component.getForm();

    assert.deepEqual(Object.keys(form), ['valid', 'value']);
  });

  it('should call the getAnswers method', () => {
    const answers: Object = component.getAnswers();

    assert.isOk(answers);
  });
});
