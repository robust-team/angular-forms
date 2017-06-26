import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

import { Validation } from '../validation';

@Component({
  selector: 'rb-validation-message',
  template: `
    <ul class="validation-message-box" *ngIf="submitted || control.touched">
      <li *ngFor="let validation of validations" [hidden]="!control.hasError(validation.type)">
        {{ validation.message }}
      </li>
    </ul>
  `,
  styles: [`
    .validation-message-box {
      margin: 0 0 7px;
      padding: 5px 0 0;
    }

    .validation-message-box li {
      border-left: 3px solid #a00;
      color: #a00;
      font-size: .9em;
      list-style: none;
      margin-bottom: 3px;
      padding: 1px 0 1px 5px;
    }
  `]
})
export class ValidationMessageComponent {

  @Input() control: AbstractControl = new FormControl();
  @Input() submitted: boolean = false;
  @Input() validations: Validation[] = [];
}
