import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { assert } from 'chai';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { NgMaskModule } from '@fagnerlima/ng-mask';
import { DataTableComponent } from '../../src/data-table';
import { ValidationMessageModule } from '../../src/validation-message';
import { AngularFormsTranslateLoader } from '../../src/angular-forms-translate-loader';
import { DataTable } from '../../src/group';
import { Checkbox, Question, Select, Text } from '../../src/question';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        ValidationMessageModule,
        NgMaskModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: AngularFormsTranslateLoader
          }
        })
      ],
      declarations: [ DataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DataTableComponent);

    component = fixture.componentInstance;
    component.formGroup = new FormGroup({ 'G-01': new FormArray([]) });
    component.group = new DataTable('G-01', 'Group 01', [[new Text('Q-01', 'Question 01', [])]]);

    fixture.detectChanges();
  }));

  it('should create', () => {
    assert(component);
  });

  it('should call onChangeOptionSelect method', () => {
    const htmlFormControl: any = { value: 'Option 2' };
    const formControl: FormControl = new FormControl('Option 2');
    const question: Select = new Select('Q-01', 'Question 01', [], 'Option 2', [], false, ['Option 1', 'Option 2'], null, 'Option 2');
    component.onChangeOptionSelect(htmlFormControl, formControl, question);
  });

  it('should call getKeysFromObject method', () => {
    assert.equal(component.getKeysFromObject({ code: 'Q-01' })[0], 'code');
  });

  it('should call addData method', () => {
    component.addData();
  });


  it('should call removeData method', () => {
    component.removeData(0);
  });

  it('should call addData method with invalid register', () => {
    component.newFormGroup = new FormGroup({ 'Q-01': new FormControl(null, Validators.required) });
    component.addData();
  });

  it('should call getQuestionByName method', () => {
    assert.deepEqual(component.getQuestionByName('Q-01'), new Text('Q-01', 'Question 01', []));
    assert.notDeepEqual(component.getQuestionByName('Q-02'), new Text('Q-01', 'Question 01', []));
  });

  it('should call getQuestionByName method', () => {
    assert.isTrue(component.isCheckbox(new Checkbox('Q-02', 'Question 02')));
    assert.isFalse(component.isCheckbox(new Text('Q-01', 'Question 01')));
  });
});
