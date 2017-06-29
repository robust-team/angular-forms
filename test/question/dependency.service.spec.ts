import { TestBed, async, inject } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';

import { assert } from 'chai';
import { DependencyService } from '../../src/question';
import { Select, Text, Dependency } from '../../src/question';

describe('Service: Dependency', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DependencyService]
    });
  });

  it('should not hide a question without dependencies', inject([DependencyService], (service: DependencyService) => {
    const question01: Select = new Select('Q-01', 'Question 01', [], 'select', 'Option 2', [], ['Option 1', 'Option 2']);
    const question02: Text = new Text('Q-02', 'Question 02', [], 'text');
    const formGroup: FormGroup = new FormGroup({
      'Q-01': new FormControl('Option 2'),
      'Q-02': new FormControl()
    });

    assert.isFalse(service.hideQuestion(question02, formGroup));
  }));

  it('should not hide a question', inject([DependencyService], (service: DependencyService) => {
    const question01: Select = new Select('Q-01', 'Question 01', [], 'select', 'Option 2', [], ['Option 1', 'Option 2']);
    const question02: Text = new Text('Q-02', 'Question 02', [new Dependency('Q-01', 'equals', 'Option 2')], 'text');
    const formGroup: FormGroup = new FormGroup({
      'Q-01': new FormControl('Option 2'),
      'Q-02': new FormControl()
    });

    assert.isFalse(service.hideQuestion(question02, formGroup));
  }));

  it('should hide a question', inject([DependencyService], (service: DependencyService) => {
    const question01: Select = new Select('Q-01', 'Question 01', [], 'select', 'Option 1', [], ['Option 1', 'Option 2']);
    const question02: Text = new Text('Q-02', 'Question 02', [new Dependency('Q-01', 'equals', 'Option 2')], 'text');
    const formGroup: FormGroup = new FormGroup({
      'Q-01': new FormControl('Option 1'),
      'Q-02': new FormControl()
    });

    assert.isTrue(service.hideQuestion(question02, formGroup));
  }));
});