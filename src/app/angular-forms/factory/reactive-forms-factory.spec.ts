import { FormArray, FormGroup, ValidatorFn } from '@angular/forms';

import { ReactiveFormsFactory } from '.';
import { DataTable, Group } from '../group';
import { Question, Text } from '../question';
import { Validation, MinLength, MaxLength, Pattern, Required } from '../validation';

describe('AngularForms :: Factory :: ReactiveFormsFactory', () => {
  it('should create a FormGroup from Groups', () => {
    const groups: Group[] = [
      new Group('group-01', 'Group 01', 'fieldset', []),
      new Group('group-02', 'Group 02', 'fieldset', [])
    ];

    expect(ReactiveFormsFactory.createFormGroupFromGroups(groups)).toEqual(jasmine.any(FormGroup));
  });

  it('should create a FormGroup from DataTables', () => {
    const groups: Group[] = [
      new DataTable('group-01', 'Group 01', 'datatable', [], [], []),
      new DataTable('group-02', 'Group 02', 'datatable', [], [], [])
    ];

    expect(ReactiveFormsFactory.createFormGroupFromGroups(groups)).toEqual(jasmine.any(FormGroup));
  });

  it('should create a FormGroup from Questions', () => {
    const questions: Question<any>[] = [
      new Text('question-01', 'Question 01', [], 'text', 'Answer'),
      new Text('question-02', 'Question 02', [], 'text', 'Answer')
    ];

    expect(ReactiveFormsFactory.createFormGroupFromQuestions(questions)).toEqual(jasmine.any(FormGroup));
  });

  it('should create a FormArray', () => {
    expect(ReactiveFormsFactory.createFormArray()).toEqual(jasmine.any(FormArray));
  });

  it('should create a FormArray with answers', () => {
    const answers: Question<any>[] = [
      new Text('question-01', 'Question 01', [], 'text', 'Answer', [], '', ''),
      new Text('question-02', 'Question 02', [], 'text', 'Answer', [], '', '')
    ];

    expect(ReactiveFormsFactory.createFormArray()).toEqual(jasmine.any(FormArray));
  });

  it('should create Validators', () => {
    const validations: Validation[] = [
      new Required('required', 'Message'),
      new MaxLength('maxlength', 'Message', 30),
      new MinLength('minlength', 'Message', 6)
    ];

    expect(ReactiveFormsFactory.createValidators(validations) instanceof Array).toBeTruthy();
  });
});
