import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

import { Validation } from '../validation';

@Component({
  selector: 'rb-validation-message',
  templateUrl: './validation-message.component.html',
})
export class ValidationMessageComponent {

  @Input() public control: AbstractControl = new FormControl();
  @Input() public submitted: boolean = false;
  @Input() public validations: Validation[] = [];
}
