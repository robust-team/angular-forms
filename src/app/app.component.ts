import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public customForm: any[] = [
    {
      'code': 'G-01',
      'description': 'Consumo de Água',
      'type': 'datatable',
      'validations': [
        { 'type': 'required', 'message': 'Você deve inserir pelo menos 2 registros nesta tabela.', 'value': 2 },
        { 'type': 'minlength', 'message': 'Você deve inserir pelo menos 2 registros nesta tabela.', 'value': 2 },
        { 'type': 'maxlength', 'message': 'Você deve inserir pelo menos 3 registros nesta tabela.', 'value': 3 }
      ],
      'questions': [
        {
          'code': 'P-201',
          'description': 'Origem',
          'type': 'select',
          'validations': [
            { 'type': 'required', 'message': 'Este campo é obrigatório' }
          ],
          'options': ['Rede Pública', 'Água Subterrânea', 'Água Superficial'],
          'placeholder': 'Selecione'
        },
        {
          'code': 'P-202',
          'description': 'Consumo Médio (m³/dia)',
          'type': 'text',
          'validations': [
            { 'type': 'required', 'message': 'Este campo é obrigatório' },
            { 'type': 'pattern', 'message': 'Este campo deve ter o formato XX0.00', 'regex': '^\\d+\.\\d{2}$' }
          ],
          'placeholder': null,
          'mask': 'decimal(10,2)'
        },
        {
          'code': 'P-203',
          'description': 'Uso',
          'type': 'select',
          'validations': [
            { 'type': 'required', 'message': 'Este campo é obrigatório' }
          ],
          'options': ['Doméstico', 'Industrial', 'Doméstico e Industrial'],
          'placeholder': 'Selecione'
        },
        {
          'code': 'P-204',
          'description': 'Vazão (m³/dia)',
          'type': 'text',
          'validations': [
            { 'type': 'required', 'message': 'Este campo é obrigatório' },
            { 'type': 'pattern', 'message': 'Este campo deve ter o formato XX0.00', 'regex': '^\\d+\.\\d{2}$' }
          ],
          'placeholder': null,
          'mask': '00000000.00?reverse=true'
        }
      ]/*,
      'answers': [
        [
          {
            'code': 'P-201',
            'description': 'Origem',
            'type': 'select',
            'options': ['Rede Pública', 'Água Subterrânea', 'Água Superficial'],
            'placeholder': 'Selecione',
            'answer': 'Água Subterrânea'
          },
          {
            'code': 'P-202',
            'description': 'Consumo Médio (m³/dia)',
            'type': 'text',
            'placeholder': null,
            'answer': '123'
          },
          {
            'code': 'P-203',
            'description': 'Uso',
            'type': 'select',
            'options': ['Doméstico', 'Industrial', 'Doméstico e Industrial'],
            'placeholder': 'Selecione',
            'answer': 'Doméstico'
          },
          {
            'code': 'P-204',
            'description': 'Vazão (m³/dia)',
            'type': 'text',
            'placeholder': null,
            'answer': '456'
          }
        ],
        [
          {
            'code': 'P-201',
            'description': 'Origem',
            'type': 'select',
            'options': ['Rede Pública', 'Água Subterrânea', 'Água Superficial'],
            'placeholder': 'Selecione',
            'answer': 'Rede Pública'
          },
          {
            'code': 'P-202',
            'description': 'Consumo Médio (m³/dia)',
            'type': 'text',
            'placeholder': null,
            'answer': '987'
          },
          {
            'code': 'P-203',
            'description': 'Uso',
            'type': 'select',
            'options': ['Doméstico', 'Industrial', 'Doméstico e Industrial'],
            'placeholder': 'Selecione',
            'answer': 'Doméstico e Industrial'
          },
          {
            'code': 'P-204',
            'description': 'Vazão (m³/dia)',
            'type': 'text',
            'placeholder': null,
            'answer': '321'
          }
        ]
      ]*/
    },
    {
      'code': 'G-02',
      'description': 'Serviços',
      'type': 'fieldset',
      'questions': [
        {
          'code': 'P-001',
          'description': 'Question Check',
          'type': 'check',
          'defaultOption': false,
          'validations': [
            { 'type': 'required', 'message': 'Este campo é obrigatório' }
          ]
        },
        {
          'code': 'P-002',
          'description': 'Question Radio',
          'type': 'radio',
          'options': ['Option 1', 'Option 2'],
          'defaultOption': 'Option 1',
          'validations': [
            { 'type': 'required', 'message': 'Este campo é obrigatório' }
          ]//,
          //'answer': 'Option 2'
        },
        {
          'code': 'P-003',
          'description': 'Question Select',
          'type': 'select',
          'options': ['Option 1', 'Option 2'],
          'placeholder': 'Selecione',
          'validations': [
            { 'type': 'required', 'message': 'Este campo é obrigatório' }
          ]
        },
        {
          'code': 'P-004',
          'description': 'Question Text 1',
          'type': 'text',
          'validations': [
            { 'type': 'required', 'message': 'Este campo é obrigatório' },
            { 'type': 'minlength', 'message': 'Este campo tem o tamanho mínimo de 3 caracteres', 'value': 3 },
            { 'type': 'maxlength', 'message': 'Este campo tem o tamanho máximo de 6 caracteres', 'value': 6 }
          ]
        },
        {
          'code': 'P-005',
          'description': 'Question Text 2',
          'type': 'text',
          'placeholder': 'Example',
          'validations': [
            { 'type': 'required', 'message': 'Este campo é obrigatório' },
            { 'type': 'pattern', 'message': 'Este campo deve ter o formato 00000-000', 'regex': '^\\d{5}-\\d{3}$' }
          ],
          'mask': '00000-000'
        },
        {
          'code': 'P-006',
          'description': 'Question TextArea',
          'type': 'textarea',
          'placeholder': 'Example',
          'validations': [
            { 'type': 'required', 'message': 'Este campo é obrigatório' }
          ],
          'dependencies': [
            { 'code': 'P-003', 'criteria': 'equals', 'expectedAnswer': 'Option 1' },
            { 'code': 'P-004', 'criteria': 'greater', 'expectedAnswer': '10' }
          ]
        }
      ]
    }
  ];

  print(value: any) {
    console.log(value);
  }
}
