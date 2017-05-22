import { Component } from '@angular/core';
import { FormControl, EmailControl } from './form-control/';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-form.component.html',
  inputs: ['controls'],
})
export class RobustFormsComponent {

  controls: Array<FormControl> = [];

}
