import { Component } from '@angular/core';

@Component({
  selector: 'rb-demo-app',
  template: `
    <div class='container'>
      <h1>AngularForms</h1>
      <rb-angular-forms #angularForms [groups]="customForm" [readOnly]="false" lang="pt-BR"></rb-angular-forms>
      <button class='btn btn-primary' (click)='print(angularForms.getForm())'>Print Form</button>
    </div>
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

  public print(value: any): void {
    console.log(value);
  }
}
