import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public customForm: Array<any> = [
    {
        "description": "Group Name",
        "questions": []
    },
    {
        "description": "Ungrouped",
        "questions": [
            {
                "description": "Entity Group",
                "customType": "aCustomType",
                "fieldType": "datatable",
                "questions": [
                    {
                        "A question description": {
                            "fieldType": "select",
                            "options": ["Option 1", "Option 2"],
                            "defaultOption": "Option 1"
                        },
                        "Another question description": {
                            "fieldType": "text",
                            "placeholder": "A example of value",
                            "mask": "##",
                            "validators": [
                                { "minLength": 1, "message": "You should have at least 1 character" },
                                { "required": true, "message": "This field should not be empty" }
                            ]
                        }
                    }
                ]
            },
            {
                "description": "A select question description",
                "fieldType": "select",
                "options": ["Option 1", "Option 2"]
            },
            {
                "description": "A free text description",
                "fieldType": "text",
                "exemplo": "A example of value",
                "mascara": "##.##.##",
                "validators": [
                    { "minLength": 1, "message": "You should have at least 1 character" },
                    { "required": true, "message": "This field should not be empty" }
                ]
            },
            {
                "code": "P-000",
                "description": "Question Check",
                "fieldType": 0,
                "defaultOption": true
            },
            {
                "code": "P-001",
                "description": "Question DataTable",
                "fieldType": 1,
            },
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
                "fieldType": 4,
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
}
