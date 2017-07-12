import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

import { Validation } from '../validation';

@Component({
  selector: 'rb-validation-message',
  template: `
    <ul class="rb-validation-message-box" *ngIf="submitted || control.touched">
      <li *ngFor="let validation of validations" [hidden]="!control.hasError(validation.type)">
        {{ validation.message }}
      </li>
    </ul>
  `,
  styles: [`
    .rb-validation-message-box {
      margin: 0;
      padding: 0;
    }
    .rb-validation-message-box li {
      border-left: 3px solid #a00;
      color: #a00;
      font-size: .9em;
      list-style: none;
      margin-bottom: 3px;
      padding: 1px 0 1px 5px;
    }
    .rb-validation-message-box li:first-of-type { margin-top: 5px }
  `]
})
export class ValidationMessageComponent {

  @Input() public control: AbstractControl = new FormControl();
  @Input() public submitted: boolean = false;
  @Input() public validations: Validation[] = [];
}
