import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

import { Validation } from '../validation';

@Component({
  selector: 'rb-validation-message',
  template: `
    <ul class="rb-validation-message" *ngIf="submitted || control.touched">
      <li *ngFor="let validation of validations" [hidden]="!control.hasError(validation.type)">
        {{ validation.message }}
      </li>
    </ul>
  `,
})
export class ValidationMessageComponent {

  @Input() public control: AbstractControl = new FormControl();
  @Input() public submitted: boolean = false;
  @Input() public validations: Validation[] = [];
}
