import { Injectable } from '@angular/core';

const groups: any[] = [
  {
    'code': 'G-01',
    'description': 'Fieldset Group',
    'type': 'group',
    'questions': [
      {
        'name': 'Q-0100',
        'description': 'Check Question 0100',
        'type': 'checkbox',
        'defaultOption': false,
        'validations': [
          { 'type': 'pattern', 'message': 'Required field.', 'value': 'true' }
        ]
      },
      {
        'name': 'Q-0101',
        'description': 'Radio Question 0101',
        'type': 'radio',
        'options': ['Option 1', 'Option 2'],
        'defaultOption': 'Option 1',
        'validations': [
          { 'type': 'required', 'message': 'Required field.' }
        ],
        'disabled': true
      },
      {
        'name': 'Q-0102',
        'description': 'Select Question 0102',
        'type': 'select',
        'options': [
          { 'value': 'op-1',  'description': 'Option 1' },
          { 'value': 'op-2',  'description': 'Option 2' },
          { 'value': 'op-3',  'description': 'Option 3' }
        ],
        'editableOption': 'op-1',
        'placeholder': 'Select',
        'validations': [
          { 'type': 'required', 'message': 'Required field.' }
        ]
      },
      {
        'name': 'Q-0103',
        'description': 'Select Question 0103',
        'type': 'select',
        'options': ['Option 1', 'Option 2'],
        'editableOption': 'Option 2',
        'placeholder': 'Select',
        'validations': [
          { 'type': 'required', 'message': 'Required field.' }
        ]
      },
      {
        'name': 'Q-0104',
        'description': 'Text Question 0104',
        'type': 'text',
        'answer': '200',
        'placeholder': 'Text Question 0104',
        'tooltip' : ['Hint for Text Question'],
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
        'tooltip' : ['Hint for Text Question'],
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
      },
      {
        'name': 'Q-0107',
        'description': 'Text Question 0107',
        'type': 'text',
        'placeholder': 'Text Question 0107',
        'validations': [
          { 'type': 'required', 'message': 'Required field.' }
        ],
        'dependencies': [
          { 'code': 'Q-0104', 'criteria': 'lessthan', 'expectedAnswer': '300' },
          { 'code': 'Q-0104', 'criteria': 'notequals', 'expectedAnswer': '100' },
          { 'code': 'Q-0104', 'criteria': 'greaterthan', 'expectedAnswer': '100' },
          { 'code': 'Q-0104', 'criteria': 'lessthanorequals', 'expectedAnswer': '300' }
        ]
      },
      {
        'name': 'Q-0108',
        'description': 'Text Question 0108',
        'type': 'text',
        'placeholder': 'Text Question 0108',
        'validations': [
          { 'type': 'min', 'message': 'Min value: 1.', 'value': '1' },
          { 'type': 'max', 'message': 'Min value: 10.', 'value': '10' }
        ]
      },
      {
        'name': 'Q-0109',
        'description': 'Text Question 0109',
        'type': 'text',
        'placeholder': 'Text Question 0109',
        'validations': [
          { 'type': 'email', 'message': 'Invalid e-mail.' }
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
          'editableOption': 'Option 3',
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
          'answer': 'Option 3'
        },
        {
          'name': 'Q-0202',
          'description': 'Text Question 0202',
          'type': 'text',
          'validations': [
            { 'type': 'required', 'message': 'Required field.' }
          ],
          'placeholder': 'Text Question 0202',
          'answer': 'Answer 0202 2'
        }
      ]
    ]
  }
];

@Injectable()
export class DemoService {

  public getForm(): any[] {
    return groups;
  }
}
