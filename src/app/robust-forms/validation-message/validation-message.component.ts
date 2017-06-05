import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Validation } from '..';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css']
})
export class ValidationMessageComponent {

  @Input() control: FormControl;
  @Input() submitted: boolean = false;
  @Input() validations: Validation[] = [];

  test() {
    console.log(this.control);
  }
}
