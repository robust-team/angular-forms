# AngularForms

[![Build Status](https://travis-ci.org/robust-team/angular-forms.svg?branch=master)](https://travis-ci.org/robust-team/angular-forms) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/253b251df47e47998d27404a6746978b)](https://www.codacy.com/app/dudemelo/angular-forms?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=robust-team/angular-forms&amp;utm_campaign=Badge_Grade)

## Requirements

[...]

## Usage

1. Install AngularForms using npm:

```
npm i @robust-team/angular-forms
```

2. Import the AngularFormsModule into Module class.

```typescript
import { AngularFormsModule } from '@robust-team/angular-forms';

@NgModule({
  imports: [
    //...
    AngularFormsModule
  ],
  // ...
})
export class MyModule { }
```

3. Insert the AngularFormsComponent into template.

```html
<angular-forms [groups]="myForm"></angular-forms>
```

The **myForm** attribute represents the JSON coming from API. For example:

```typescript
{
  [
    {
      "code": "G-01",
      "description": "Group 01",
      "type": "datatable",
      "questions": [
        {
          "code": "Q-101",
          "description": "Question 101",
          "type": "select",
          "options": [
            "Option 1",
            "Option 2"
          ],
          "placeholder": "Select",
          "validations": [
            { "type": "required", "message": "Required field" }
          ]
        },
        {
          "code": "Q-102",
          "description": "Question 102",
          "type": "text",
          "validations": [
            { "type": "required", "message": "Required field" }
          ]
        }
      ],
      "validations": [
        { "type": "required", "message": "Required field" }
      ]
    },
    {
      "code": "G-02",
      "description": "Group 02",
      "type": "fieldset",
      "questions": [
        {
          "code": "Q-201",
          "description": "Question 201",
          "type": "check",
          "validations": [
            { "type": "required", "message": "Required field" }
          ]
        },
        {
          "code": "Q-202",
          "description": "Question 202",
          "type": "radio",
          "options": [
            "Option 1",
            "Option 2"
          ],
          "defaultOption": "Option 1",
          "validations": [
            { "type": "required", "message": "Required field" }
          ]
        },
        {
          "code": "Q-203",
          "description": "Question 203",
          "type": "text",
          "placeholder": "00000-000",
          "validations": [
            { "type": "required", "message": "Required field" },
            { "type": "pattern", "message": "Format: 00000-000", "regex": "^\\d{5}-\\d{3}$" }
          ],
          "mask": "00000-000",
          "dependencies": [
            { "code": "Q-202", "criteria": "equals", "expectedAnswer": "Option 2" }
          ]
        },
        {
          "code": "Q-204",
          "description": "Question 204",
          "type": "text",
          "validations": [
            { "type": "required", "message": "Required field" },
            { "type": "minlength", "message": "Minimum size: 3", "value": 3 },
            { "type": "maxlength", "message": "Maximum size: 6", "value": 6 }
          ]
        }
      ]
    }
  ]
}
```

4. Get form values by adding a local variable to the component and calling the **getForm()** method. For example:

```html
<angular-forms #angularForms [groups]="myForm"></angular-forms>
<button (click)="print(angularForms.getForm())">Print Form</button>
```

```typescript
export class MyComponent {

  print(value: any) {
    console.log(value);
  }
}
```

The output of getForm() is an object that contains:

- **valid**: Informs if the forms is valid, that is, if it agrees with all the validations.
- **value**: An object that contains the groups of questions with their respective answers. Groups and questions are represented by their respective code; and each question has its answer.

Example output:

```typescript
{
  valid: false,
  value: {
    "G-01": [
      {
        "Q-101": "Option 1",
        "Q-102": "123"
      }
    ],
    "G-02": {
      "Q-201": "Option 1",
      "Q-202": "Option 2",
      "Q-203": null,
      "Q-204": null
    }
  }
}
```

## Groups

[...]

### Fieldset

[...]

### DataTable

[...]

## Questions

[...]

### Validations

[...]

### Masks

[...]

### Dependencies

[...]
