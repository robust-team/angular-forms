import { Component } from '@angular/core';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-form.component.html',
  inputs: ['groups'],
})
export class RobustFormsComponent {

  groups: Array<any> = [];

}
