import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public customForm: Array<any> = [
    {
        "description": "Consumo de Água",
        "groupType": 1,
        "customType": "consumo-agua",
        "questions": [
            {
                "code": "P-201",
                "description": "Origem",
                "fieldType": 4,
                "placeholder": "Example 11"
            },
            {
                "code": "P-202",
                "description": "Consumo Médio",
                "fieldType": 4,
                "placeholder": "Example 12"
            },
            {
                "code": "P-203",
                "description": "Uso",
                "fieldType": 4,
                "placeholder": "Example 13"
            },
            {
                "code": "P-204",
                "description": "Vazão",
                "fieldType": 4,
                "placeholder": "Example 14"
            }
        ]
    },
    {
        "description": "Serviços",
        "groupType": 0,
        "questions": [
            {
                "code": "P-002",
                "description": "Question Radio",
                "fieldType": 2,
                "options": ["Option 1", "Option 2"],
                "defaultOption": "Option 2"
            },
            {
                "code": "P-003",
                "description": "Question Select",
                "fieldType": 3,
                "options": ["Option 1", "Option 2"],
                "placeholder": "Select"
            },
            {
                "code": "P-004",
                "description": "Question Text 1",
                "fieldType": 4
            },
            {
                "code": "P-005",
                "description": "Question Text 2",
                "fieldType": 4,
                "placeholder": "Example"
            }
        ]
    }
  ];

  printValues(values: Object) {
      console.log(values);
  }
}
