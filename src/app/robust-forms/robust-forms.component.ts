import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { Group, RobustForms, ReactiveFormsFactory, DependencyService } from '.';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-forms.component.html',
  providers: [DependencyService]
})
export class RobustFormsComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;

  @Input() groups: Group[] = [];
  @Output() getValues: EventEmitter<Object> = new EventEmitter();

  public constructor(protected dependencyService: DependencyService) { }

  ngOnInit() {
    this.groups = RobustForms.fromJson(this.groups);
    this.formGroup = ReactiveFormsFactory.createFormGroupFromGroups(this.groups);
  }

  emitValues() {
    this.submitted = true;
    this.getValues.emit({ valid: this.formGroup.valid, value: this.formGroup.value });
  }
}
