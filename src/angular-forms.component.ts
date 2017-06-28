import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { AngularForms } from '.';
import { Group } from './group';
import { Question, DependencyService } from './question';
import { ReactiveFormsFactory } from './factory';

@Component({
  selector: 'rb-angular-forms',
  templateUrl: require('file-loader!./angular-forms.component.html'),
  styleUrls: [require('file-loader!./assets/css/main.css')],
  providers: [DependencyService]
})
export class AngularFormsComponent implements OnInit {

  public formGroup: FormGroup;
  public submitted: boolean = false;

  @Input() public groups: Group[] = [];
  @Input() public lang: string = 'en-US';
  @Input() public readOnly: boolean = false;

  public constructor(private translateService: TranslateService, private dependencyService: DependencyService) { }

  public ngOnInit(): void {
    this.configTranslate();
    this.groups = AngularForms.fromJson(this.groups);
    this.formGroup = ReactiveFormsFactory.createFormGroupFromGroups(this.groups);
  }

  public hideQuestion(question: Question<any>, formGroup: FormGroup): boolean {
    return this.dependencyService.hideQuestion(question, formGroup);
  }

  public getForm(): { valid: boolean, value: any } {
    this.submitted = true;

    return { valid: this.formGroup.valid, value: this.formGroup.value };
  }

  private configTranslate(): void {
    this.translateService.addLangs(['en-US', 'pt-BR']);
    this.translateService.setDefaultLang('en-US');
    this.translateService.use(this.lang || 'en-US');
  }
}
