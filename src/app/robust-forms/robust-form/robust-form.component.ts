import { Component, OnInit } from '@angular/core';
import { FormControl, EmailControl } from './form-control/';

@Component({
  selector: 'robust-form',
  templateUrl: './robust-form.component.html',
})
export class RobustFormComponent implements OnInit {

  public controls: Array<FormControl> = [
    { name: '' },
  ]

  ngOnInit() {
  }

}
