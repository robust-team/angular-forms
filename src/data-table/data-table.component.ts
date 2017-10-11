import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { Status } from '..';
import { Select, SelectService, Question, QuestionType } from '../question';
import { Group, DataTable } from '../group';
import { ReactiveFormsFactory } from '../factory';

@Component({
  selector: 'rb-data-table',
  templateUrl: './data-table.component.html',
})
export class DataTableComponent implements OnInit {

  public readonly Status: Object = Status;

  public formArray: FormArray;
  public newFormGroup: FormGroup;
  public submitted: boolean = false;

  @Input() public formGroup: FormGroup;
  @Input() public group: DataTable;
  @Input() public formGroupSubmitted: boolean = false;
  @Input() public readOnly: boolean = false;

  @Output() public error: EventEmitter<Error> = new EventEmitter();
  @Output() public ready: EventEmitter<boolean> = new EventEmitter();

  private _status: Status;

  public ngOnInit(): void {
    this.formArray = <FormArray>this.formGroup.get(this.group.code);

    if (this.formArray) {
      this._status = Status.LOADING;
      this.load()
        .then(() => {
          this._status = Status.READY;
          this.ready.emit();
        })
        .catch((error: Error) => {
          this._status = Status.ERROR;
          this.error.emit(error);
        });
    }
  }

  public onChangeOptionSelect(htmlFormControl: HTMLInputElement, formControl: FormControl, question: Select): void {
    SelectService.onChangeOption(htmlFormControl, formControl, question);
  }

  public getKeysFromObject(object: Object): string[] {
    return Object.keys(object);
  }

  public addData(): void {
    this.submitted = true;

    if (!this.newFormGroup.valid) {
      return;
    }

    this.formArray.push(Object.assign(new FormGroup({}), this.newFormGroup));
    this.resetForms();
  }

  public removeData(index: number): void {
    this.formArray.removeAt(index);
  }

  public resetForms(): void {
    this.newFormGroup.reset();
    this.submitted = false;
  }

  public getQuestionByName(name: string): Question<any> {
    for (const question of this.group.questions[0]) {
      if (name === question.name) {
        return question;
      }
    }

    return null;
  }

  public isCheckbox(question: Question<any>): boolean {
    return QuestionType.CHECKBOX === question.type;
  }

  public get status(): Status {
    return this._status;
  }

  private async load(): Promise<void> {
    return new Promise<void>(async (resolve: () => void, reject: (error: Error) => void) => {
      try {
        this.newFormGroup = await ReactiveFormsFactory.createFormGroupFromQuestions(this.group.questions[0], false);

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
