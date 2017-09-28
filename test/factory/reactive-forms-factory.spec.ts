import { FormArray, FormGroup, ValidatorFn } from '@angular/forms';

import { assert } from 'chai';
import { ReactiveFormsFactory } from '../../src/factory';
import { Fieldset, DataTable, Group } from '../../src/group';
import { Question, Text } from '../../src/question';
import { Validation, MinLength, MaxLength, Pattern, Required } from '../../src/validation';
import { ValidationTypeNotFoundError } from '../../src/chain-of-responsibility/validator-factory/error';

describe('AngularForms :: Factory :: ReactiveFormsFactory', () => {
  it('should create a FormGroup from Groups', async () => {
    const groups: Group<any>[] = [
      new Fieldset('group-01', 'Group 01', []),
      new Fieldset('group-02', 'Group 02', [])
    ];
    const formGroup: FormGroup = await ReactiveFormsFactory.createFormGroupFromGroups(groups);

    assert.isTrue(formGroup instanceof FormGroup);
  });

  it('should create a FormGroup from DataTables', async () => {
    const groups: Group<any>[] = [
      new DataTable('group-01', 'Group 01', [], []),
      new DataTable('group-02', 'Group 02', [], [])
    ];
    const formGroup: FormGroup = await ReactiveFormsFactory.createFormGroupFromGroups(groups);

    assert.isTrue(formGroup instanceof FormGroup);
  });

  it('should create a FormGroup from Questions', async () => {
    const questions: Question<any>[] = [
      new Text('question-01', 'Question 01', [], 'Answer'),
      new Text('question-02', 'Question 02', [], 'Answer')
    ];
    const formGroup: FormGroup = await ReactiveFormsFactory.createFormGroupFromQuestions(questions);

    assert.isTrue(formGroup instanceof FormGroup);
  });

  it('should create a FormArray without answers', async () => {
    const questions: Question<any>[][] = [
      [
        new Text('question-01', 'Question 01', []),
        new Text('question-02', 'Question 02', [])
      ]
    ];
    const formArray: FormArray = await ReactiveFormsFactory.createFormArrayFromQuestions(questions);

    assert.isTrue(formArray instanceof FormArray);
  });

  it('should create a FormArray with answers', async () => {
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
    const formArray: FormArray = await ReactiveFormsFactory.createFormArrayFromQuestions(questions);

    assert.isTrue(formArray instanceof FormArray);
  });

  it('should create Validators', async () => {
    const validations: Validation[] = [
      new Required('Message'),
      new MaxLength('Message', 30),
      new MinLength('Message', 6)
    ];
    const validators: ValidatorFn[] = await ReactiveFormsFactory.createValidators(validations);

    assert.isTrue(validators instanceof Array);
  });

  it('should throw a ValidationTypeNotFoundError', async () => {
    try {
      const validations: any[] = [{ type: 'url', message: 'Invalid URL' }];
      const validators: ValidatorFn[] = await ReactiveFormsFactory.createValidators(validations);

      throw new Error();
    } catch (error) {
      assert.isTrue(error instanceof ValidationTypeNotFoundError);
    }
  });
});
