import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

import { Validation } from '../validation';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css']
})
export class ValidationMessageComponent {

  @Input() control: AbstractControl = new FormControl();
  @Input() submitted: boolean = false;
  @Input() validations: Validation[] = [];
}
