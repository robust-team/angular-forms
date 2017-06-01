import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { Group, RobustForms, ReactiveFormsFactory } from '.';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-forms.component.html'
})
export class RobustFormsComponent {

  formGroup: FormGroup;

  @Input() groups: Group[] = [];
  @Output() getValues: EventEmitter<Object> = new EventEmitter();
  @ViewChild('robustForm') robustForm: FormGroupDirective;

  ngOnInit() {
    this.groups = RobustForms.fromJson(this.groups);
    this.formGroup = ReactiveFormsFactory.createFormGroupFromGroups(this.groups);
  }

  emitValues() {
    console.log(this.formGroup);
    this.robustForm.onSubmit(null);
    this.getValues.emit(this.formGroup.value);
  }
}
