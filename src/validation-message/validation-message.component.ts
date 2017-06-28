import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

import { Validation } from '../validation';

@Component({
  selector: 'rb-validation-message',
  templateUrl: require('file-loader!./validation-message.component.html'),
  styleUrls: [require('file-loader!./validation-message.component.css')]
})
export class ValidationMessageComponent {

  @Input() public control: AbstractControl = new FormControl();
  @Input() public submitted: boolean = false;
  @Input() public validations: Validation[] = [];
}
