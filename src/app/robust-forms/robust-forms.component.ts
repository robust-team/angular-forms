import { Component, OnInit } from '@angular/core';
import { FormControl, EmailControl } from './form-control/';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-form.component.html',
})
export class RobustFormsComponent implements OnInit {

  public controls: Array<FormControl> = [
    { name: '' },
  ]

  ngOnInit() {
  }

}
