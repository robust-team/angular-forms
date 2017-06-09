import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public customForm: Array<any> = [
    {
      'code': 'G-01',
      'description': 'Consumo de Água',
      'groupType': 'datatable',
      'customType': 'consumo-agua',
      'questions': [
        {
          'code': 'P-201',
          'description': 'Origem',
          'fieldType': 'select',
          'validations': [
            { 'validationType': 'required', 'message': 'Este campo é obrigatório' }
          ],
          'options': ['Rede Pública', 'Água Subterrânea', 'Água Superficial'],
          'placeholder': 'Selecione'
        },
        {
          'code': 'P-202',
          'description': 'Consumo Médio (m³/dia)',
          'fieldType': 'text',
          'validations': [
            { 'validationType': 'required', 'message': 'Este campo é obrigatório' },
            { 'validationType': 'pattern', 'message': 'Este campo deve ter o formato XX0.00', 'regex': '^\\d+\.\\d{2}$' }
          ],
          'placeholder': null,
          'mask': 'decimal(10,2)'
        },
        {
          'code': 'P-203',
          'description': 'Uso',
          'fieldType': 'select',
          'validations': [
            { 'validationType': 'required', 'message': 'Este campo é obrigatório' }
          ],
          'options': ['Doméstico', 'Industrial', 'Doméstico e Industrial'],
          'placeholder': 'Selecione'
        },
        {
          'code': 'P-204',
          'description': 'Vazão (m³/dia)',
          'fieldType': 'text',
          'validations': [
            { 'validationType': 'required', 'message': 'Este campo é obrigatório' },
            { 'validationType': 'pattern', 'message': 'Este campo deve ter o formato XX0.00', 'regex': '^\\d+\.\\d{2}$' }
          ],
          'placeholder': null,
          'mask': '00000000.00?reverse=true'
        }
      ],
      'answers': [
        [
          {
            'code': 'P-201',
            'description': 'Origem',
            'fieldType': 'select',
            'options': ['Rede Pública', 'Água Subterrânea', 'Água Superficial'],
            'placeholder': 'Selecione',
            'answer': 'Água Subterrânea'
          },
          {
            'code': 'P-202',
            'description': 'Consumo Médio (m³/dia)',
            'fieldType': 'text',
            'placeholder': null,
            'answer': '123'
          },
          {
            'code': 'P-203',
            'description': 'Uso',
            'fieldType': 'select',
            'options': ['Doméstico', 'Industrial', 'Doméstico e Industrial'],
            'placeholder': 'Selecione',
            'answer': 'Doméstico'
          },
          {
            'code': 'P-204',
            'description': 'Vazão (m³/dia)',
            'fieldType': 'text',
            'placeholder': null,
            'answer': '456'
          }
        ],
        [
          {
            'code': 'P-201',
            'description': 'Origem',
            'fieldType': 'select',
            'options': ['Rede Pública', 'Água Subterrânea', 'Água Superficial'],
            'placeholder': 'Selecione',
            'answer': 'Rede Pública'
          },
          {
            'code': 'P-202',
            'description': 'Consumo Médio (m³/dia)',
            'fieldType': 'text',
            'placeholder': null,
            'answer': '987'
          },
          {
            'code': 'P-203',
            'description': 'Uso',
            'fieldType': 'select',
            'options': ['Doméstico', 'Industrial', 'Doméstico e Industrial'],
            'placeholder': 'Selecione',
            'answer': 'Doméstico e Industrial'
          },
          {
            'code': 'P-204',
            'description': 'Vazão (m³/dia)',
            'fieldType': 'text',
            'placeholder': null,
            'answer': '321'
          }
        ]
      ]
    },
    {
      'code': 'G-02',
      'description': 'Serviços',
      'groupType': 'fieldset',
      'questions': [
        {
          'code': 'P-001',
          'description': 'Question Check',
          'fieldType': 'check',
          'defaultOption': false,
          'validations': [
            { 'validationType': 'required', 'message': 'Este campo é obrigatório' }
          ]
        },
        {
          'code': 'P-002',
          'description': 'Question Radio',
          'fieldType': 'radio',
          'options': ['Option 1', 'Option 2'],
          'defaultOption': 'Option 1',
          'validations': [
            { 'validationType': 'required', 'message': 'Este campo é obrigatório' }
          ]
        },
        {
          'code': 'P-003',
          'description': 'Question Select',
          'fieldType': 'select',
          'options': ['Option 1', 'Option 2'],
          'placeholder': 'Selecione',
          'validations': [
            { 'validationType': 'required', 'message': 'Este campo é obrigatório' }
          ]
        },
        {
          'code': 'P-004',
          'description': 'Question Text 1',
          'fieldType': 'text',
          'validations': [
            { 'validationType': 'required', 'message': 'Este campo é obrigatório' },
            { 'validationType': 'minlength', 'message': 'Este campo tem o tamanho mínimo de 3 caracteres', 'value': 3 },
            { 'validationType': 'maxlength', 'message': 'Este campo tem o tamanho máximo de 6 caracteres', 'value': 6 }
          ]
        },
        {
          'code': 'P-005',
          'description': 'Question Text 2',
          'fieldType': 'text',
          'placeholder': 'Example',
          'validations': [
            { 'validationType': 'required', 'message': 'Este campo é obrigatório' },
            { 'validationType': 'pattern', 'message': 'Este campo deve ter o formato 00000-000', 'regex': '^\\d{5}-\\d{3}$' }
          ],
          'mask': '00000-000'
        },
        {
          'code': 'P-006',
          'description': 'Question TextArea',
          'fieldType': 'textarea',
          'placeholder': 'Example',
          'validations': [
            { 'validationType': 'required', 'message': 'Este campo é obrigatório' }
          ],
          'dependencies': [
            { 'code': 'P-003', 'criteria': 'equals', 'expectedAnswer': 'Option 1' },
            { 'code': 'P-004', 'criteria': 'greater', 'expectedAnswer': '10' }
          ]
        }
      ]
    }
  ];

  printValues(values: Object) {
    console.log(values);
  }
}
