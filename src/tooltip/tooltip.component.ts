import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'rb-tooltip',
  template: `
    <div class="tooltip top" role="tooltip">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        {{tooltip}}
      </div>
    </div>`,
})
export class TooltipComponent {

  @Input() public control: AbstractControl = new FormControl();
  @Input() public submitted: boolean = false;
  @Input() public tooltip: string;
}
