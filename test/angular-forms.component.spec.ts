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
import { Select, Text, Dependency } from '../src/question';

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
    component.groups = <any>[
      {
        'code': 'G-01',
        'description': 'Fieldset Group',
        'type': 'group',
        'questions': [
          {
            'name': 'Q-0101',
            'description': 'Check Question 0101',
            'type': 'check',
            'defaultOption': false,
            'validations': [
              { 'type': 'pattern', 'message': 'Required field.', 'value': 'true' }
            ]
          },
          {
            'name': 'Q-0102',
            'description': 'Radio Question 0102',
            'type': 'radio',
            'options': ['Option 1', 'Option 2'],
            'defaultOption': 'Option 1',
            'validations': [
              { 'type': 'required', 'message': 'Required field.' }
            ]
          },
          {
            'name': 'Q-0103',
            'description': 'Select Question 0103',
            'type': 'select',
            'options': ['Option 1', 'Option 2'],
            'placeholder': 'Select',
            'validations': [
              { 'type': 'required', 'message': 'Required field.' }
            ]
          },
          {
            'name': 'Q-0104',
            'description': 'Text Question 0104',
            'type': 'text',
            'placeholder': 'Text Question 0104',
            'validations': [
              { 'type': 'required', 'message': 'Required field.' },
              { 'type': 'minlength', 'message': 'Min Length: 3', 'value': 3 },
              { 'type': 'maxlength', 'message': 'Max Length: 10', 'value': 10 }
            ]
          },
          {
            'name': 'Q-0105',
            'description': 'Text Question 0105',
            'type': 'text',
            'placeholder': 'Text Question 0105',
            'validations': [
              { 'type': 'required', 'message': 'Required field.' },
              { 'type': 'pattern', 'message': 'Format: 00000-000', 'value': '^\\d{5}-\\d{3}$' }
            ],
            'mask': '00000-000'
          },
          {
            'name': 'Q-0106',
            'description': 'TextArea Question 0106',
            'type': 'textarea',
            'placeholder': 'TextArea Question 0106',
            'validations': [
              { 'type': 'required', 'message': 'Required field.' }
            ],
            'dependencies': [
              { 'code': 'Q-0103', 'criteria': 'equals', 'expectedAnswer': 'Option 1' }
            ]
          }
        ]
      },
      {
        'code': 'G-02',
        'description': 'DataTable Group',
        'type': 'datatable',
        'validations': [
          { 'type': 'required', 'message': 'Min number of registers: 1.' },
          { 'type': 'minlength', 'message': 'Min number of registers: 1.', 'value': 1 },
          { 'type': 'maxlength', 'message': 'Max number of registers: 3.', 'value': 3 }
        ],
        'questions': [
          [
            {
              'name': 'Q-0201',
              'description': 'Select Question 0201',
              'type': 'select',
              'validations': [
                { 'type': 'required', 'message': 'Required field.' }
              ],
              'options': ['Option 1', 'Option 2', 'Option 3'],
              'placeholder': 'Select'
            },
            {
              'name': 'Q-0202',
              'description': 'Text Question 0202',
              'type': 'text',
              'validations': [
                { 'type': 'required', 'message': 'Required field.' }
              ],
              'placeholder': 'Text Question 0202'
            }
          ],
          [
            {
              'name': 'Q-0201',
              'description': 'Select Question 0201',
              'type': 'select',
              'validations': [
                { 'type': 'required', 'message': 'Required field.' }
              ],
              'options': ['Option 1', 'Option 2', 'Option 3'],
              'placeholder': 'Select',
              'answer': 'Option 2'
            },
            {
              'name': 'Q-0202',
              'description': 'Text Question 0202',
              'type': 'text',
              'validations': [
                { 'type': 'required', 'message': 'Required field.' }
              ],
              'placeholder': 'Text Question 0202',
              'answer': 'Answer 0202'
            }
          ]
        ]
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    assert(component);
  });

  it('should not hide a question without dependencies', () => {
    const question01: Select = new Select('Q-01', 'Question 01', [], 'select', 'Option 2', [], ['Option 1', 'Option 2']);
    const question02: Text = new Text('Q-02', 'Question 02', [], 'text');
    const formGroup: FormGroup = new FormGroup({
      'Q-01': new FormControl('Option 2'),
      'Q-02': new FormControl()
    });

    assert.isFalse(component.hideQuestion(question02, formGroup));
  });

  it('should not hide a question', () => {
    const question01: Select = new Select('Q-01', 'Question 01', [], 'select', 'Option 2', [], ['Option 1', 'Option 2']);
    const question02: Text = new Text('Q-02', 'Question 02', [
      new Dependency('Q-01', 'equals', 'Option 2'), new Dependency('Q-03', 'equals', 'Option 2')
    ], 'text');
    const formGroup: FormGroup = new FormGroup({
      'Q-01': new FormControl('Option 2'),
      'Q-02': new FormControl()
    });

    assert.isFalse(component.hideQuestion(question02, formGroup));
  });

  it('should hide a question without dependencies', () => {
    const question01: Select = new Select('Q-01', 'Question 01', [], 'select', 'Option 1', [], ['Option 1', 'Option 2']);
    const question02: Text = new Text('Q-02', 'Question 02', [new Dependency('Q-01', 'equals', 'Option 2')], 'text');
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
    console.log('########################################################');
    console.log(JSON.stringify(answers));

    assert.isOk(answers);
  });
});
