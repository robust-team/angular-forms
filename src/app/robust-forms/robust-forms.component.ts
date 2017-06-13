import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { RobustForms, ReactiveFormsFactory } from '.';
import { Group } from './group';
import { Question, DependencyService } from './question';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-forms.component.html',
  providers: [DependencyService]
})
export class RobustFormsComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;

  @Input() groups: Group[] = [];

  constructor(private dependencyService: DependencyService) { }

  ngOnInit() {
    this.groups = RobustForms.fromJson(this.groups);
    this.formGroup = ReactiveFormsFactory.createFormGroupFromGroups(this.groups);
  }

  hideQuestion(question: Question<any>, formGroup: FormGroup) {
    return this.dependencyService.hideQuestion(question, formGroup);
  }

  getForm(): { valid: boolean, value: any } {
    this.submitted = true;

    return { valid: this.formGroup.valid, value: this.formGroup.value };
  }
}
