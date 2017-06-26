import { Component } from '@angular/core';

@Component({
  selector: 'rb-demo-app',
  template: `
    <rb-angular-forms #angularForms [groups]="customForm" [readOnly]="false"></rb-angular-forms>
    <button (click)="print(angularForms.getForm())">Print Form</button>
  `
})
export class DemoComponent {

  public customForm: any[] = [
    {
      'code': 'G-01',
      'description': 'Fieldset Group',
      'type': 'fieldset',
      'questions': [
        {
          'code': 'Q-0101',
          'description': 'Question Check 0101',
          'type': 'check',
          'defaultOption': false,
          'validations': [
            { 'type': 'required', 'message': 'Required field.', 'requiredTrue': true }
          ]
        },
        {
          'code': 'Q-0102',
          'description': 'Question Radio 0102',
          'type': 'radio',
          'options': ['Option 1', 'Option 2'],
          'defaultOption': 'Option 1',
          'validations': [
            { 'type': 'required', 'message': 'Required field.' }
          ]
        },
        {
          'code': 'Q-0103',
          'description': 'Question Select 0103',
          'type': 'select',
          'options': ['Option 1', 'Option 2'],
          'placeholder': 'Select',
          'validations': [
            { 'type': 'required', 'message': 'Required field.' }
          ]
        },
        {
          'code': 'Q-0104',
          'description': 'Question Text 0104',
          'type': 'text',
          'placeholder': 'Question Text 0104',
          'validations': [
            { 'type': 'required', 'message': 'Required field.' },
            { 'type': 'minlength', 'message': 'Min Length: 3', 'value': 3 },
            { 'type': 'maxlength', 'message': 'Max Length: 6', 'value': 10 }
          ]
        },
        {
          'code': 'Q-0105',
          'description': 'Question Text 0105',
          'type': 'text',
          'placeholder': 'Question Text 0105',
          'validations': [
            { 'type': 'required', 'message': 'Required field.' },
            { 'type': 'pattern', 'message': 'Format: 00000-000', 'regex': '^\\d{5}-\\d{3}$' }
          ],
          'mask': '00000-000'
        },
        {
          'code': 'Q-0106',
          'description': 'Question TextArea 0106',
          'type': 'textarea',
          'placeholder': 'Question TextArea 0106',
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
        {
          'code': 'Q-0201',
          'description': 'Question Select 0201',
          'type': 'select',
          'validations': [
            { 'type': 'required', 'message': 'Required field.' }
          ],
          'options': ['Option 1', 'Option 2', 'Option 3'],
          'placeholder': 'Select'
        },
        {
          'code': 'Q-0202',
          'description': 'Question Text 0202',
          'type': 'text',
          'validations': [
            { 'type': 'required', 'message': 'Required field.' }
          ],
          'placeholder': 'Question Text 0202',
          'mask': 'decimal(10,2)'
        },
        {
          'code': 'Q-0203',
          'description': 'Question Text 0203',
          'type': 'text',
          'validations': [
            { 'type': 'required', 'message': 'Required field.' }
          ],
          'placeholder': 'Question Text 0203'
        }
      ]
    }
  ];

  public print(value: any): void {
    console.log(value);
  }
}
