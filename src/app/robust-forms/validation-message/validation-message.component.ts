import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Validation } from '..';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css']
})
export class ValidationMessageComponent implements OnChanges {

  formControl: FormControl;

  @Input() descriptionControl: string;
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean = false;
  @Input() validations: Validation[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.formControl = <FormControl> this.formGroup.get(this.descriptionControl);
  }

  test() {
    console.log(this.formGroup);
  }
}
