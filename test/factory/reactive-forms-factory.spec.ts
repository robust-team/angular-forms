import { FormArray, FormGroup, ValidatorFn } from '@angular/forms';

import { assert } from 'chai';
import { ReactiveFormsFactory } from '../../src/factory';
import { Fieldset, DataTable, Group } from '../../src/group';
import { Question, Text } from '../../src/question';
import { Validation, MinLength, MaxLength, Pattern, Required } from '../../src/validation';

describe('AngularForms :: Factory :: ReactiveFormsFactory', () => {
  it('should create a FormGroup from Groups', () => {
    const groups: Group[] = [
      new Fieldset('group-01', 'Group 01', []),
      new Fieldset('group-02', 'Group 02', [])
    ];

    assert.isTrue(ReactiveFormsFactory.createFormGroupFromGroups(groups) instanceof FormGroup);
  });

  it('should create a FormGroup from DataTables', () => {
    const groups: Group[] = [
      new DataTable('group-01', 'Group 01', [], []),
      new DataTable('group-02', 'Group 02', [], [])
    ];

    assert.isTrue(ReactiveFormsFactory.createFormGroupFromGroups(groups) instanceof FormGroup);
  });

  it('should create a FormGroup from Questions', () => {
    const questions: Question<any>[] = [
      new Text('question-01', 'Question 01', [], 'Answer'),
      new Text('question-02', 'Question 02', [], 'Answer')
    ];

    assert.isTrue(ReactiveFormsFactory.createFormGroupFromQuestions(questions) instanceof FormGroup);
  });

  it('should create a FormArray without answers', () => {
    const questions: Question<any>[][] = [
      [
        new Text('question-01', 'Question 01', []),
        new Text('question-02', 'Question 02', [])
      ]
    ];

    assert.isTrue(ReactiveFormsFactory.createFormArrayFromQuestions(questions) instanceof FormArray);
  });

  it('should create a FormArray with answers', () => {
    const questions: Question<any>[][] = [
      [
        new Text('question-01', 'Question 01', []),
        new Text('question-02', 'Question 02', [])
      ],
      [
        new Text('question-01', 'Question 01', [], 'Answer 1'),
        new Text('question-02', 'Question 02', [], 'Answer 2')
      ]
    ];

    assert.isTrue(ReactiveFormsFactory.createFormArrayFromQuestions(questions) instanceof FormArray);
  });

  it('should create Validators', () => {
    const validations: Validation[] = [
      new Required('Message'),
      new MaxLength('Message', 30),
      new MinLength('Message', 6)
    ];

    assert.isTrue(ReactiveFormsFactory.createValidators(validations) instanceof Array);
  });

  it('should throw a ValidationTypeNotFoundError', () => {
    const validations: any[] = [{ type: 'url', message: 'Invalid URL' }];

    assert.isTrue(0 === ReactiveFormsFactory.createValidators(validations).length);
  });
});
