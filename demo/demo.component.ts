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
      'type': 'group',
      'questions': [
        {
          'name': 'Q-0101',
          'description': 'Check Question 0101',
          'type': 'check',
          'defaultOption': 'false',
          'validations': [
            { 'type': 'required', 'message': 'Required field.', 'requiredTrue': 'true' }
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
          'placeholder': 'Select an option',
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
            { 'type': 'maxlength', 'message': 'Max Length: 6', 'value': 10 }
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
            { 'name': 'Q-0103', 'criteria': 'equals', 'expectedAnswer': 'Option 1' }
          ]
        }
      ]
    },
    {
      'code': 'G-02',
      'description': 'DataTable Group',
      'type': 'customDescription',
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
            'placeholder': 'Text Question 0202',
            'mask': 'decimal(10,2)'
          },
          {
            'name': 'Q-0203',
            'description': 'Check Question 0203',
            'type': 'check',
            'defaulOption': 'false',
            'placeholder': 'Check Question 0203'
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
            'answer': 'Option 1'
          },
          {
            'name': 'Q-0202',
            'description': 'Text Question 0202',
            'type': 'text',
            'validations': [
              { 'type': 'required', 'message': 'Required field.' }
            ],
            'placeholder': 'Question Text 0202',
            'mask': 'decimal(10,2)',
            'answer': '1.23'
          },
          {
            'name': 'Q-0203',
            'description': 'Check Question 0203',
            'type': 'check',
            'defaulOption': 'true',
            'placeholder': 'Check Question 0203',
            'answer': 'false'
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
            'placeholder': 'Question Text 0202',
            'mask': 'decimal(10,2)',
            'answer': '9.87'
          },
          {
            'name': 'Q-0203',
            'description': 'Check Question 0203',
            'type': 'check',
            'defaulOption': 'true',
            'placeholder': 'Check Question 0203',
            'answer': 'true'
          }
        ]
      ]
    }
  ];

  public print(value: any): void {
    console.log(value);
  }
}
